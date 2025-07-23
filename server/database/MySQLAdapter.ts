import { BaseAdapter } from './DatabaseAdapter';

// MySQL adapter implementation (requires mysql2 package)
// Uncomment and install mysql2 when ready to use: npm install mysql2
export class MySQLAdapter extends BaseAdapter {
  private connection: any = null;
  private transactionActive: boolean = false;

  constructor(private config: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  }) {
    super();
  }

  async connect(): Promise<void> {
    try {
      // Uncomment when mysql2 is installed:
      // const mysql = await import('mysql2/promise');
      // this.connection = await mysql.createConnection(this.config);
      // this.connected = true;
      // console.log('MySQL adapter connected successfully');
      
      throw new Error('MySQL adapter requires mysql2 package. Install with: npm install mysql2');
    } catch (error) {
      this.connected = false;
      throw new Error(`Failed to connect to MySQL: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.connection) {
        await this.connection.end();
        this.connection = null;
      }
      this.connected = false;
      console.log('MySQL adapter disconnected');
    } catch (error) {
      console.error('Error disconnecting from MySQL:', error);
    }
  }

  async execute(query: string, params: any[] = []): Promise<any> {
    if (!this.connection) {
      throw new Error('Not connected to MySQL');
    }
    
    try {
      const [result] = await this.connection.execute(query, params);
      return result;
    } catch (error) {
      console.error('MySQL execute error:', error);
      throw error;
    }
  }

  async query(query: string, params: any[] = []): Promise<any[]> {
    const result = await this.execute(query, params);
    return Array.isArray(result) ? result : [result];
  }

  async beginTransaction(): Promise<void> {
    if (this.transactionActive) {
      throw new Error('Transaction already in progress');
    }
    
    await this.connection.beginTransaction();
    this.transactionActive = true;
  }

  async commitTransaction(): Promise<void> {
    if (!this.transactionActive) {
      throw new Error('No transaction in progress');
    }
    
    await this.connection.commit();
    this.transactionActive = false;
  }

  async rollbackTransaction(): Promise<void> {
    if (!this.transactionActive) {
      throw new Error('No transaction in progress');
    }
    
    await this.connection.rollback();
    this.transactionActive = false;
  }
}