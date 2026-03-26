"use cache";
export const revalidate = 60;
import { IBookWithAuthor } from "@/types/types";
import { supabase } from "@/lib/supabase/server";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const { data } = (await supabase
    .from("books")
    .select(
      `id,
    created_at,
    title,
    authorId,
    categoryId,
    detail,
    picture,
    url_slug,
    isbn,
    publish_date,
    page_number,
    price,
    original_price,
    discount_price,
    purchase_link_trendyol,
    authors (
    id,
    fullname
    ),
    categories (
    category
    )
    `
    )
    .eq("url_slug", slug)) as {
    data: IBookWithAuthor[] | null;
  };
//  console.log("DATA FOUND WITH SLUG", data);

  if (!data) {
    return Response.json(null);
  } else {
    const dataToReturn: IBookWithAuthor = data[0];
    const dataWithImageUrl = {
      ...dataToReturn,
      picture: supabase.storage
        .from("book-images")
        .getPublicUrl(dataToReturn.picture).data.publicUrl,
    };
    return Response.json(dataWithImageUrl);
  }
}
