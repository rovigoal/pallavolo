// supabase-config.js
const SUPABASE_URL = 'https://ojzdxhukqhnrobpxxvlh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qemR4aHVrcWhucm9icHh4dmxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3Nzc5NDIsImV4cCI6MjA4ODM1Mzk0Mn0.N47R33pZ54dyoLyLqZfjfBkXyRYgWal0y-NwJKjM0XI';

// Inizializza il client Supabase - NOTA: si chiama supabaseClient
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
