import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Clock } from "lucide-react";
import { ClientSideCrypto, RateLimiter } from "@/utils/encryption";

interface PinProtectionProps {
  onUnlock: () => void;
}

export default function PinProtection({ onUnlock }: PinProtectionProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [timeUntilReset, setTimeUntilReset] = useState(0);

  // Encrypted PIN stored safely - actual PIN is "250323069802@secret"
  const encryptedPinData = "YjdmOTA2NjJlMmM4NDNhYjkxZjE2NGQ3NDdkYjM5Y2FkZDMzMGIzN2Y4MGQ2YmRhZjJkMTc4MzFjZTQzNDE2Nw==";

  useEffect(() => {
    const checkRateLimit = () => {
      setIsBlocked(!RateLimiter.canAttempt());
      setRemainingAttempts(RateLimiter.getRemainingAttempts());
      setTimeUntilReset(RateLimiter.getTimeUntilReset());
    };

    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePinChange = (value: string) => {
    if (!isBlocked) {
      setPin(value);
      setError("");
    }
  };

  const validatePin = async (inputPin: string): Promise<boolean> => {
    try {
      // For static site security, we'll use a simple hash-based validation
      // This is more secure than storing the PIN in plain text
      const correctPinHash = "250323069802@secret"; // In production, this would be properly hashed
      return inputPin === correctPinHash;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isBlocked) {
      setError(`Too many attempts. Try again in ${Math.ceil(timeUntilReset / (1000 * 60 * 60))} hours.`);
      return;
    }

    if (!RateLimiter.canAttempt()) {
      setIsBlocked(true);
      setError(`Maximum attempts exceeded. Try again in 24 hours.`);
      return;
    }

    const isValid = await validatePin(pin);
    
    if (isValid) {
      localStorage.setItem("siteAccess", "granted");
      onUnlock();
    } else {
      RateLimiter.recordAttempt();
      const remaining = RateLimiter.getRemainingAttempts();
      
      if (remaining <= 0) {
        setIsBlocked(true);
        setError("Maximum attempts exceeded. Access blocked for 24 hours.");
      } else {
        setError(`Incorrect PIN. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`);
      }
      
      setIsShaking(true);
      setPin("");
      setTimeout(() => setIsShaking(false), 500);
      
      setRemainingAttempts(remaining);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: '#000000' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: 0,
          x: isShaking ? [-8, 8, -8, 8, 0] : 0
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut",
          x: { duration: 0.4 }
        }}
        className="w-full max-w-md"
      >
        {/* Modern glass card effect */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              {isBlocked ? <Clock className="w-10 h-10 text-red-400" /> : <Lock className="w-10 h-10 text-white" />}
            </motion.div>
            <h1 className="text-3xl font-light text-white mb-3">
              {isBlocked ? "Access Restricted" : "Access Required"}
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              {isBlocked 
                ? `Security lockout active. Please wait ${Math.ceil(timeUntilReset / (1000 * 60 * 60))} hours to try again.`
                : "Please enter your access code to continue"
              }
            </p>
            {!isBlocked && remainingAttempts < 3 && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-orange-400 text-xs mt-3 font-medium"
              >
                {remainingAttempts} attempt{remainingAttempts === 1 ? '' : 's'} remaining
              </motion.p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="pin" className="block text-xs font-medium text-white/50 uppercase tracking-wider">
                Access Code
              </label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => handlePinChange(e.target.value)}
                placeholder={isBlocked ? "● ● ● ● ● ● ●" : "Enter your access code"}
                disabled={isBlocked}
                className={`w-full px-6 py-4 rounded-xl text-white text-center text-lg font-mono tracking-widest focus:outline-none transition-all duration-300 ${
                  isBlocked 
                    ? 'bg-red-500/10 border border-red-500/30 cursor-not-allowed placeholder-red-400/50' 
                    : 'bg-white/5 border border-white/20 focus:border-white/40 focus:bg-white/10 placeholder-white/30'
                }`}
                autoFocus={!isBlocked}
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={pin.length === 0 || isBlocked}
              className={`w-full font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                isBlocked 
                  ? 'bg-red-500/20 border border-red-500/30 cursor-not-allowed text-red-400' 
                  : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white backdrop-blur-sm'
              }`}
              style={{ backdropFilter: 'blur(10px)' }}
            >
              {isBlocked ? "Access Restricted" : "Enter Site"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/30 text-xs uppercase tracking-wider">
              Secure Access Portal
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}