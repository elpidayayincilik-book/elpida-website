import { NextApiRequest } from "next";
import { supabase } from "../../../lib/supabase/server";
export async function GET(req: NextApiRequest) {
  console.log("req.headers.origin", req.headers.origin);

  const { data, error } = await supabase.from("books").select();
  console.log(error);
  console.log("getBooks worked");

  return Response.json(data);
}
