"use cache";
export const revalidate = 60;
import { IBookWithAuthor } from "@/types/types";
import { supabase } from "../lib/supabase/server";
export async function getBooks(): Promise<null | IBookWithAuthor[]> {
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
    price,
    original_price,
    discount_price,
    isbn,
    publish_date,
    page_number,
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
    .order("publish_date", { ascending: false })) as {
    data: IBookWithAuthor[] | null;
  };


  if (data && data.length) {
    const dataToReturn: IBookWithAuthor[] = data.map((book) => ({
      ...book,
      picture: supabase.storage.from("book-images").getPublicUrl(book.picture)
        .data.publicUrl,
    }));

    return dataToReturn;
  } else return null;
}

export async function getBookBySlug({
  slug,
}: {
  slug: string;
}): Promise<null | IBookWithAuthor> {
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
    .eq("url_slug", slug)) as {
    data: IBookWithAuthor[] | null;
  };

  if (!data) {
    return null;
  } else {
    const dataToReturn: IBookWithAuthor = data[0];
    const dataWithImageUrl = {
      ...dataToReturn,
      picture: supabase.storage
        .from("book-images")
        .getPublicUrl(dataToReturn.picture).data.publicUrl,
    };
    return dataWithImageUrl;
  }
}
