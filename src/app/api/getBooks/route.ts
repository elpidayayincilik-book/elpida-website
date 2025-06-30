import { supabase } from "../../../lib/supabase/server";
export async function GET() {
  const { data, error } = await supabase.from("books").select();
  console.log(error);

  return Response.json(data);
}
