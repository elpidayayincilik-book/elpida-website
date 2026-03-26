"use cache";
export const revalidate = 60;

import {
  IBookNames,
  IBookWithAuthor,
  ICommentSubmit,
  IContact,
  IPublishPackage,
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
    url_slug,
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

    return dataToReturn;
  } else return null;
}

export async function getBooksNames(): Promise<null | IBookNames[]> {
  const { data } = (await supabase.from("books").select(
    `id,
    title,
    picture,
    url_slug,
    authors (
    id,
    fullname
    )
    `
  )) as { data: IBookNames[] | null };

  if (data && data.length) {
    const dataToReturn: IBookNames[] = data.map((book) => ({
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
  const { data } = (await supabase
    .from("sliders")
    .select()
    .order("created_at", { ascending: false })
    .limit(5)) as {
    data: ISlider[] | null;
  };

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

    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export const getPublishPackages = async () => {
  try {
    const { data } = (await supabase.from("publish_packages").select()) as {
      data: IPublishPackage[] | null;
    };

    if (data) {
      const dataToReturn = data.map((item) => ({
        ...item,
        picture: supabase.storage
          .from("publish-packages-images")
          .getPublicUrl(item.picture).data.publicUrl,
      }));
      return dataToReturn;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
