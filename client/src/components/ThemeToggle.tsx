import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
    document.documentElement.classList.toggle('light', !shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update DOM classes
    document.documentElement.classList.toggle('dark', newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Update CSS custom properties
    const root = document.documentElement;
    if (newTheme) {
      // Dark theme
      root.style.setProperty('--dark-primary', 'hsl(20, 14.3%, 4.1%)');
      root.style.setProperty('--dark-secondary', 'hsl(12, 6.5%, 15.1%)');
      root.style.setProperty('--dark-card', 'hsl(24, 9.8%, 10%)');
      root.style.setProperty('--text-primary', 'hsl(0, 0%, 98%)');
      root.style.setProperty('--text-secondary', 'hsl(24, 5.4%, 63.9%)');
      root.style.setProperty('--border-dark', 'hsl(24, 5.7%, 82.9%)');
    } else {
      // Light theme
      root.style.setProperty('--dark-primary', 'hsl(0, 0%, 98%)');
      root.style.setProperty('--dark-secondary', 'hsl(60, 4.8%, 95.9%)');
      root.style.setProperty('--dark-card', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-primary', 'hsl(20, 14.3%, 4.1%)');
      root.style.setProperty('--text-secondary', 'hsl(24, 5.4%, 36.1%)');
      root.style.setProperty('--border-dark', 'hsl(24, 5.7%, 17.1%)');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-card border border-border-dark hover:bg-text-secondary hover:text-dark-primary transition-all duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}