// Client-side encryption utilities for static site security
// Uses Web Crypto API for browser-native encryption

export class ClientSideCrypto {
  private static readonly ALGORITHM = 'AES-GCM';
  private static readonly KEY_LENGTH = 256;
  private static readonly IV_LENGTH = 12;

  // Generate a key from password using PBKDF2
  private static async deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);
    
    const baseKey = await crypto.subtle.importKey(
      'raw',
      passwordBuffer,
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    );

    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      baseKey,
      { name: this.ALGORITHM, length: this.KEY_LENGTH },
      false,
      ['encrypt', 'decrypt']
    );
  }

  // Encrypt text
  static async encrypt(text: string, password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(this.IV_LENGTH));
    
    const key = await this.deriveKey(password, salt);
    
    const encrypted = await crypto.subtle.encrypt(
      {
        name: this.ALGORITHM,
        iv: iv,
      },
      key,
      data
    );

    // Combine salt, iv, and encrypted data
    const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);

    // Convert to base64
    const binaryString = Array.from(combined).map(byte => String.fromCharCode(byte)).join('');
    return btoa(binaryString);
  }

  // Decrypt text
  static async decrypt(encryptedData: string, password: string): Promise<string> {
    try {
      const combinedArray = atob(encryptedData).split('').map(char => char.charCodeAt(0));
    const combined = new Uint8Array(combinedArray);

      const salt = combined.slice(0, 16);
      const iv = combined.slice(16, 16 + this.IV_LENGTH);
      const encrypted = combined.slice(16 + this.IV_LENGTH);

      const key = await this.deriveKey(password, salt);

      const decrypted = await crypto.subtle.decrypt(
        {
          name: this.ALGORITHM,
          iv: iv,
        },
        key,
        encrypted
      );

      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
    } catch (error) {
      throw new Error('Decryption failed');
    }
  }
}

// Rate limiting for PIN attempts
export class RateLimiter {
  private static readonly STORAGE_KEY = 'pin_attempts';
  private static readonly MAX_ATTEMPTS = 3;
  private static readonly RESET_PERIOD = 24 * 60 * 60 * 1000; // 24 hours

  private static getAttemptData(): { count: number; lastAttempt: number; ip: string } {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      return { count: 0, lastAttempt: 0, ip: '' };
    }
    return JSON.parse(stored);
  }

  private static saveAttemptData(data: { count: number; lastAttempt: number; ip: string }): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  // Get user's IP (simulated for client-side)
  private static getClientIP(): string {
    // For a static site, we'll use a combination of browser fingerprinting
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Client fingerprint', 2, 2);
    }
    const fingerprint = canvas.toDataURL();
    
    // Create a simple hash from fingerprint + user agent
    const combined = fingerprint + navigator.userAgent + screen.width + screen.height;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  static canAttempt(): boolean {
    const data = this.getAttemptData();
    const currentIP = this.getClientIP();
    const now = Date.now();

    // Reset if 24 hours have passed or different IP
    if (now - data.lastAttempt > this.RESET_PERIOD || data.ip !== currentIP) {
      this.saveAttemptData({ count: 0, lastAttempt: now, ip: currentIP });
      return true;
    }

    return data.count < this.MAX_ATTEMPTS;
  }

  static recordAttempt(): void {
    const data = this.getAttemptData();
    const currentIP = this.getClientIP();
    const now = Date.now();

    this.saveAttemptData({
      count: data.count + 1,
      lastAttempt: now,
      ip: currentIP
    });
  }

  static getRemainingAttempts(): number {
    const data = this.getAttemptData();
    const currentIP = this.getClientIP();
    const now = Date.now();

    // Reset if 24 hours have passed or different IP
    if (now - data.lastAttempt > this.RESET_PERIOD || data.ip !== currentIP) {
      return this.MAX_ATTEMPTS;
    }

    return Math.max(0, this.MAX_ATTEMPTS - data.count);
  }

  static getTimeUntilReset(): number {
    const data = this.getAttemptData();
    const now = Date.now();
    const resetTime = data.lastAttempt + this.RESET_PERIOD;
    return Math.max(0, resetTime - now);
  }
}