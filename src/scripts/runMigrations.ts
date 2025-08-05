import { supabase } from '@/integrations/supabase/client';
import fs from 'fs';
import path from 'path';

async function runMigrations() {
  try {
    const migrationPath = path.join(process.cwd(), 'supabase/migrations/20250722095633-d7a983a5-e852-4964-900f-82b116ae9d49.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
    
    console.log('Running migration...');
    
    const { data, error } = await supabase.rpc('exec_sql', { sql: migrationSQL });
    
    if (error) {
      console.error('Migration failed:', error);
      return;
    }
    
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Error running migration:', error);
  }
}

runMigrations();
