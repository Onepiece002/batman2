import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from "ws";
import { BaseAdapter } from './DatabaseAdapter';

neonConfig.webSocketConstructor = ws;

export class PostgreSQLAdapter extends BaseAdapter {
  private pool: Pool;
  private transactionClient: any = null;

  constructor(connectionString?: string) {
    super();
    
    const dbUrl = connectionString || process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL must be set for PostgreSQL adapter');
    }
    
    this.pool = new Pool({ connectionString: dbUrl });
  }

  async connect(): Promise<void> {
    try {
      // Test the connection
      await this.pool.query('SELECT 1');
      this.connected = true;
      console.log('PostgreSQL adapter connected successfully');
    } catch (error) {
      this.connected = false;
      throw new Error(`Failed to connect to PostgreSQL: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.pool.end();
      this.connected = false;
      console.log('PostgreSQL adapter disconnected');
    } catch (error) {
      console.error('Error disconnecting from PostgreSQL:', error);
    }
  }

  async execute(query: string, params: any[] = []): Promise<any> {
    const client = this.transactionClient || this.pool;
    try {
      const result = await client.query(query, params);
      return result;
    } catch (error) {
      console.error('PostgreSQL execute error:', error);
      throw error;
    }
  }

  async query(query: string, params: any[] = []): Promise<any[]> {
    const result = await this.execute(query, params);
    return result.rows || [];
  }

  async beginTransaction(): Promise<void> {
    if (this.transactionClient) {
      throw new Error('Transaction already in progress');
    }
    
    this.transactionClient = await this.pool.connect();
    await this.transactionClient.query('BEGIN');
  }

  async commitTransaction(): Promise<void> {
    if (!this.transactionClient) {
      throw new Error('No transaction in progress');
    }
    
    try {
      await this.transactionClient.query('COMMIT');
    } finally {
      this.transactionClient.release();
      this.transactionClient = null;
    }
  }

  async rollbackTransaction(): Promise<void> {
    if (!this.transactionClient) {
      throw new Error('No transaction in progress');
    }
    
    try {
      await this.transactionClient.query('ROLLBACK');
    } finally {
      this.transactionClient.release();
      this.transactionClient = null;
    }
  }
}