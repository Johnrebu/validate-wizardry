// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vqidnfpmowlqsuboxjzc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxaWRuZnBtb3dscXN1Ym94anpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NDI4MTEsImV4cCI6MjA1NjQxODgxMX0.7JIw4jV0BlhqcLPmcwc_fprIEwdTfVLy5tFhglVE4qs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);