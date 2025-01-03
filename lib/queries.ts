import { createClient } from "@/utils/supabase/server";

export async function getSnapshots() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("snapshots").select("*");
  return { data, error };
}
