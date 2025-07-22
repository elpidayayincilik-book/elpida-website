import { IBookWithAuthor } from "@/types/types";
import { supabase } from "@/lib/supabase/server";

export async function GET({ params }: { params: { slug: string } }) {
  console.log("params.slugggg", params.slug);

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
    authors (
    id,
    fullname
    ),
    categories (
    category
    )
    `
    )
    .eq("url_slug", params.slug)) as {
    data: IBookWithAuthor[] | null;
  };
  console.log("DATA FOUND WITH SLUG", data);

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
