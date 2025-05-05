// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xldaphhhgpctqslpfqfx.supabase.co"; // ②で取得したURL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGFwaGhoZ3BjdHFzbHBmcWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MTE0NzgsImV4cCI6MjA2MTk4NzQ3OH0.X6Uqavf2mRIYrejkxsIY2oMGP2ehwd8_20vpgr5vhD4"; // ③で取得したanonキー

export const supabase = createClient(supabaseUrl, supabaseKey);
