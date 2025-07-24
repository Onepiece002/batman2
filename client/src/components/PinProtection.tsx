import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface PinProtectionProps {
  onUnlock: () => void;
}

export default function PinProtection({ onUnlock }: PinProtectionProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const correctPin = "250323069802@secret";

  const handlePinChange = (value: string) => {
    // Allow alphanumeric characters and special symbols
    setPin(value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin === correctPin) {
      // Store access in localStorage
      localStorage.setItem("siteAccess", "granted");
      onUnlock();
    } else {
      setError("Incorrect PIN. Please try again.");
      setIsShaking(true);
      setPin("");
      setTimeout(() => setIsShaking(false), 500);
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
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Protected Access</h1>
          <p className="text-gray-400">Enter the PIN to access the website</p>
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
              placeholder="Enter access code"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-center text-lg tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
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
            disabled={pin.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Unlock Website
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