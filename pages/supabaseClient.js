import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://cjsrvstkmsxxyfjrnfgy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqc3J2c3RrbXN4eHlmanJuZmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDg4NzYsImV4cCI6MjA3NzIyNDg3Nn0.qTWBh-pUgAx86HkXVm3nQ3J8YLhsORfOZkjn_6yRtb8'
export const supabase = createClient(supabaseUrl, supabaseKey)
