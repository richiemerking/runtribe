// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fhajkpnorprvsyjojept.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYWprcG5vcnBydnN5am9qZXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTA5NzksImV4cCI6MjA2NjMyNjk3OX0.Es7qjm6nkej7VePlAI7u77uCRu0osMmL5i6D2hpratM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);