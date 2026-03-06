// supabase-config.js
const SUPABASE_URL = 'https://svvwbpnthazjxgcntfek.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dndicG50aGF6anhnY250ZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzMxNDMsImV4cCI6MjA4ODM0OTE0M30.HNf75JKb2SvfDdrvlKJfxeqtUXxJgBRUYnj5u_M2xfk';

// Inizializza il client Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
