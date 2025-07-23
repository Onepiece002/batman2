# Database Migration Guide

This guide explains how to migrate your database to a different provider using the database adapter system.

## Overview

The application now includes a database adapter system that makes it easy to switch between different database providers without changing your application code.

## Supported Databases

### Currently Implemented
- **PostgreSQL** (Neon, AWS RDS, Google Cloud SQL, self-hosted)

### Ready for Implementation
- **MySQL** (requires `mysql2` package installation)
- **SQLite** (adapter not yet implemented)

## Migration Steps

### 1. From Neon PostgreSQL to Another PostgreSQL Provider

1. Export your current data:
   ```bash
   pg_dump $CURRENT_DATABASE_URL > backup.sql
   ```

2. Set up your new PostgreSQL database and update the `DATABASE_URL` environment variable

3. Import your data:
   ```bash
   psql $NEW_DATABASE_URL < backup.sql
   ```

4. Test the connection:
   ```bash
   npm run db:push
   ```

### 2. From PostgreSQL to MySQL

1. Export your schema and data (manual conversion required):
   ```bash
   pg_dump --schema-only $DATABASE_URL > schema.sql
   pg_dump --data-only $DATABASE_URL > data.sql
   ```

2. Install MySQL adapter dependencies:
   ```bash
   npm install mysql2
   ```

3. Update your environment variables:
   ```env
   # Remove DATABASE_URL
   DB_TYPE=mysql
   DB_HOST=your-mysql-host
   DB_PORT=3306
   DB_USER=your-username
   DB_PASSWORD=your-password
   DB_NAME=your-database
   ```

4. Update `server/database/DatabaseFactory.ts` to read these new variables

5. Convert and import your schema/data (manual process required)

## Environment Configuration

### PostgreSQL (Current)
```env
DATABASE_URL=postgresql://user:password@host:port/database
```

### MySQL (Future)
```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASSWORD=password
DB_NAME=database_name
```

### Using the Factory
```typescript
import { DatabaseFactory } from './database/DatabaseFactory';

// Auto-detect from environment
const db = DatabaseFactory.createFromEnv();

// Or specify manually
const db = DatabaseFactory.create({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'username',
  password: 'password',
  database: 'mydb'
});
```

## Code Changes Required

The current application uses Drizzle ORM with PostgreSQL. To migrate:

1. **Keep Drizzle**: Update `drizzle.config.ts` to use the new database URL
2. **Or Switch**: Replace Drizzle calls with the adapter interface in `storage.ts`

## Testing Migration

1. Set up a test database with the new provider
2. Run the migration process
3. Test all application features:
   - User authentication
   - Blog post CRUD
   - Portfolio image management
   - Contact form submissions
   - Admin dashboard

## Rollback Plan

Always keep your original `DATABASE_URL` and data backup:

1. Restore the original environment variable
2. Import backup data if needed
3. Restart the application

## Notes

- The adapter system is designed for easy switching
- Current implementation maintains backward compatibility
- All database operations are abstracted through interfaces
- Transaction support is included for data consistency