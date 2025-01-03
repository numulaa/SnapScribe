"use server";
import { createClient } from "@/utils/supabase/client";

export async function getServerSideProps(context: any) {
  const supabase = createClient();
  const query = context.query?.query || "";

  try {
    // Fetch snapshots from the database
    const { data: snapshots, error } = await supabase
      .from("snapshots")
      .select("*");
    // Example: Filter by name containing the query

    if (error) {
      console.error("Error fetching snapshots:", error.message);
      return { props: { snapshots: [], query } };
    }

    return {
      props: {
        snapshots: snapshots || [],
        query,
      },
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      props: {
        snapshots: [],
        query,
      },
    };
  }
}
