"use client";

import { IBook } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function usePrefetchBook(book: IBook) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/kitap/${book.url_slug}`);
  }, [router, book.url_slug]);
}
