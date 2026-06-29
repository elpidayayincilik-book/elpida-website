"use cache";
import { supabase } from "../../../lib/supabase/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("about").select();

    if (error || !data || data.length === 0) {
      return Response.json([]);
    }

    return Response.json(data[0]?.about ?? []);
  } catch (error) {
    console.log("ERROR: from getAbout/route.ts", error);
    return Response.json([]);
  }
}