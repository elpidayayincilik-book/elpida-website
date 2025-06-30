import { IBook, IBookWithAuthor } from "@/types/types";
import { supabase } from "../lib/supabase/server";
export async function getBooks(): Promise<null | IBookWithAuthor[]> {
  const { data, error } = await supabase.from("books").select(
    `id,
    created_at,
    title,
    authorId,
    categoryId,
    detail,
    picture,
    authors (
    id,
    fullname
    ),
    categories (
    category
    )
    `
  );
  if (error) {
    return null;
  }
  if (data && data.length) {
    return data;
  } else return null;
}

export async function getBookByTitle({
  title,
}: {
  title: string;
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
  authors (
  id,
  fullname
  ),
  categories (
  category
  )
  `
    )
    .eq("title", title)) as { data: IBookWithAuthor[] | null };
  console.log("data with authorsss", data);

  if (!data) {
    return null;
  } else {
    const dataToReturn: IBookWithAuthor = data[0];
    return dataToReturn;
  }
}
