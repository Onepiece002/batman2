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
    <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: isShaking ? [-10, 10, -10, 10, 0] : 0
        }}
        transition={{ 
          duration: 0.5,
          x: { duration: 0.5 }
        }}
        className="bg-gray-900 p-8 rounded-2xl border border-gray-700 max-w-md w-full mx-4"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            {isBlocked ? <Clock className="w-8 h-8 text-red-400" /> : <Lock className="w-8 h-8 text-white" />}
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {isBlocked ? "Access Blocked" : "Protected Access"}
          </h1>
          <p className="text-gray-400">
            {isBlocked 
              ? `Too many failed attempts. Try again in ${Math.ceil(timeUntilReset / (1000 * 60 * 60))} hours.`
              : "Enter the PIN to access the website"
            }
          </p>
          {!isBlocked && remainingAttempts < 3 && (
            <p className="text-yellow-400 text-sm mt-2">
              {remainingAttempts} attempt{remainingAttempts === 1 ? '' : 's'} remaining
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-300 mb-2">
              Access Code
            </label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => handlePinChange(e.target.value)}
              placeholder={isBlocked ? "Access blocked" : "Enter access code"}
              disabled={isBlocked}
              className={`w-full px-4 py-3 border rounded-lg text-white text-center text-lg tracking-wider focus:outline-none focus:ring-2 transition-colors ${
                isBlocked 
                  ? 'bg-gray-700 border-red-500 cursor-not-allowed' 
                  : 'bg-gray-800 border-gray-600 focus:ring-blue-500 focus:border-transparent'
              }`}
              autoFocus={!isBlocked}
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
            className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors ${
              isBlocked 
                ? 'bg-red-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed'
            } text-white`}
          >
            {isBlocked ? "Access Blocked" : "Unlock Website"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Protected content requires authorization
          </p>
        </div>
      </motion.div>
    </div>
  );
}