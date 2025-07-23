// Database adapter interface for easy migration between database providers
export interface DatabaseAdapter {
  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;

  // Query execution
  execute(query: string, params?: any[]): Promise<any>;
  query(query: string, params?: any[]): Promise<any[]>;
  
  // Transaction support
  beginTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
  
  // Health check
  ping(): Promise<boolean>;
}

// Abstract base class for database adapters  
export abstract class BaseAdapter implements DatabaseAdapter {
  protected connected: boolean = false;
  
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract execute(query: string, params?: any[]): Promise<any>;
  abstract query(query: string, params?: any[]): Promise<any[]>;
  abstract beginTransaction(): Promise<void>;
  abstract commitTransaction(): Promise<void>;
  abstract rollbackTransaction(): Promise<void>;
  
  isConnected(): boolean {
    return this.connected;
  }
  
  async ping(): Promise<boolean> {
    try {
      await this.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}