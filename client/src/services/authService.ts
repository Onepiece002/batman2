// Abstracted authentication service for easy Firebase migration
export interface AuthService {
  login(): Promise<void>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<any>;
  isAuthenticated(): Promise<boolean>;
}

// Current implementation using Replit Auth
export class ReplitAuthService implements AuthService {
  async login(): Promise<void> {
    window.location.href = "/api/login";
  }

  async logout(): Promise<void> {
    window.location.href = "/api/logout";
  }

  async getCurrentUser(): Promise<any> {
    const response = await fetch("/api/auth/user", {
      credentials: "include",
    });
    
    if (!response.ok) {
      throw new Error("Not authenticated");
    }
    
    return response.json();
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      await this.getCurrentUser();
      return true;
    } catch {
      return false;
    }
  }
}

// Firebase implementation (ready for future migration)
export class FirebaseAuthService implements AuthService {
  async login(): Promise<void> {
    // Firebase auth implementation
    throw new Error("Firebase auth not implemented yet");
  }

  async logout(): Promise<void> {
    // Firebase auth implementation
    throw new Error("Firebase auth not implemented yet");
  }

  async getCurrentUser(): Promise<any> {
    // Firebase auth implementation
    throw new Error("Firebase auth not implemented yet");
  }

  async isAuthenticated(): Promise<boolean> {
    // Firebase auth implementation
    throw new Error("Firebase auth not implemented yet");
  }
}

// Current auth service instance
export const authService = new ReplitAuthService();

// To migrate to Firebase, simply change this to:
// export const authService = new FirebaseAuthService();
