import { supabase } from "../../../lib/supabase/server";
export async function GET() {
  try {
    const { data } = await supabase.from("about").select();
    console.log("data from getAbout", data);

    return Response.json(data![0].about);
  } catch (error) {
    console.log("ERROR: from getAbout/route.ts", error);
    return Response.json(null);
  }
}
