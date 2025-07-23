// Main database exports for the application
export { DatabaseAdapter, BaseAdapter } from './DatabaseAdapter';
export { PostgreSQLAdapter } from './PostgreSQLAdapter';
export { MySQLAdapter } from './MySQLAdapter';
export { DatabaseFactory, getDatabase, initializeDatabase, closeDatabase } from './DatabaseFactory';
export type { DatabaseType, DatabaseConfig } from './DatabaseFactory';

// Re-export the current Drizzle setup for backward compatibility
export { db, pool } from '../db';