import { useState, useEffect } from "react";

export function usePinProtection() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already entered the correct pin
    const siteAccess = localStorage.getItem("siteAccess");
    if (siteAccess === "granted") {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const unlock = () => {
    setIsUnlocked(true);
  };

  const lock = () => {
    localStorage.removeItem("siteAccess");
    setIsUnlocked(false);
  };

  return {
    isUnlocked,
    isLoading,
    unlock,
    lock
  };
}