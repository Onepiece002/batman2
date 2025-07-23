import { DatabaseAdapter } from './DatabaseAdapter';
import { PostgreSQLAdapter } from './PostgreSQLAdapter';
import { MySQLAdapter } from './MySQLAdapter';

export type DatabaseType = 'postgresql' | 'mysql' | 'sqlite';

export interface DatabaseConfig {
  type: DatabaseType;
  connectionString?: string;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
}

export class DatabaseFactory {
  static create(config: DatabaseConfig): DatabaseAdapter {
    switch (config.type) {
      case 'postgresql':
        return new PostgreSQLAdapter(config.connectionString);
        
      case 'mysql':
        if (!config.host || !config.user || !config.database) {
          throw new Error('MySQL requires host, user, and database in config');
        }
        return new MySQLAdapter({
          host: config.host,
          port: config.port || 3306,
          user: config.user,
          password: config.password || '',
          database: config.database,
        });
        
      case 'sqlite':
        throw new Error('SQLite adapter not implemented yet');
        
      default:
        throw new Error(`Unsupported database type: ${config.type}`);
    }
  }

  static createFromEnv(): DatabaseAdapter {
    // Auto-detect database type from environment
    if (process.env.DATABASE_URL) {
      const url = process.env.DATABASE_URL;
      
      if (url.startsWith('postgres://') || url.startsWith('postgresql://')) {
        return new PostgreSQLAdapter(url);
      }
      
      if (url.startsWith('mysql://')) {
        const urlObj = new URL(url);
        return new MySQLAdapter({
          host: urlObj.hostname,
          port: parseInt(urlObj.port) || 3306,
          user: urlObj.username,
          password: urlObj.password,
          database: urlObj.pathname.slice(1), // Remove leading slash
        });
      }
    }
    
    // Default to PostgreSQL if DATABASE_URL exists
    if (process.env.DATABASE_URL) {
      return new PostgreSQLAdapter();
    }
    
    throw new Error('No database configuration found in environment variables');
  }
}

// Singleton instance for global database access
let dbInstance: DatabaseAdapter | null = null;

export function getDatabase(): DatabaseAdapter {
  if (!dbInstance) {
    dbInstance = DatabaseFactory.createFromEnv();
  }
  return dbInstance;
}

export async function initializeDatabase(): Promise<DatabaseAdapter> {
  const db = getDatabase();
  await db.connect();
  return db;
}

export async function closeDatabase(): Promise<void> {
  if (dbInstance) {
    await dbInstance.disconnect();
    dbInstance = null;
  }
}