import {
  IBookWithAuthor,
  ICommentSubmit,
  IContact,
  ISlider,
} from "@/types/types";
import { supabase } from "../lib/supabase/server";
export async function getBooks(): Promise<null | IBookWithAuthor[]> {
  const { data } = (await supabase.from("books").select(
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
  )) as { data: IBookWithAuthor[] | null };

  if (data && data.length) {
    const dataToReturn: IBookWithAuthor[] = data.map((book) => ({
      ...book,
      picture: supabase.storage.from("book-images").getPublicUrl(book.picture)
        .data.publicUrl,
    }));
    console.log("dataToReturn", dataToReturn);

    return dataToReturn;
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
    const dataWithImageUrl = {
      ...dataToReturn,
      picture: supabase.storage
        .from("book-images")
        .getPublicUrl(dataToReturn.picture).data.publicUrl,
    };
    return dataWithImageUrl;
  }
}

export const submitComment = async (
  commentBody: ICommentSubmit
): Promise<boolean> => {
  try {
    const { bookId, comment, email } = commentBody;

    if (!bookId) {
      return false;
    }
    await supabase.from("comments").insert({
      comment,
      email,
      bookId,
    });
    return true;
  } catch (error) {
    console.log("ERROR. ACTION. SUBMIT_COMMENT", error);
    return false;
  }
};

export const getSliders = async () => {
  const { data } = (await supabase.from("sliders").select()) as {
    data: ISlider[] | null;
  };
  console.log("sldiers", data);

  if (data) {
    const dataToReturn = data.map((item) => ({
      ...item,
      image_url: supabase.storage
        .from("intro-slider")
        .getPublicUrl(item.image_url).data.publicUrl,
    }));
    return dataToReturn;
  }
  return null;
};

export const submitContactMessage = async (
  body: IContact
): Promise<boolean> => {
  try {
    await supabase.from("contact").insert(body);
console.log("trueee");

    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
