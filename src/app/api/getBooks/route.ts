import { supabase } from "../../../lib/supabase/server";
export async function GET() {
  const { data } = await supabase.from("books").select();
  // console.log(error);
  console.log("getBooks worked");

  return Response.json(data);
}
