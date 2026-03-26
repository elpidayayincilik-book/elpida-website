import { getBooks } from "@/actions/getBooks";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = await getBooks();
  const booksMap: MetadataRoute.Sitemap =
    books?.map((item) => ({
      url: `https://www.elpidakitap.com.tr/kitap/${item.url_slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    })) ?? [];
  return [
    {
      url: "https://www.elpidakitap.com.tr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.elpidakitap.com.tr/hakkimizda",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.elpidakitap.com.tr/yayin-paketlerimiz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.elpidakitap.com.tr/iletisim",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...booksMap!,
  ];
}
