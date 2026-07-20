import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kuwtwsthtllczkdnxdfy.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1d3R3c3RodGxsY3prZG54ZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NDM5NTEsImV4cCI6MjEwMDExOTk1MX0.zYsL_Y_AHNwOFDV3ZLnMA4bMpYqMxQAKS0smduB8ToM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);