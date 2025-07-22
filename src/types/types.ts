import { StaticImageData } from "next/image";

export interface IAuthor {
  id: number;
  created_at: Date;
  fullname: string;
  about: string;
}
export interface ICategory {
  id: number;
  created_at: Date;
  category: string;
}

export interface IBook {
  id: number;
  created_at: Date;
  title: string;
  authorId: number;
  categoryId: number;
  detail: string;
  picture: string;
  authors: IAuthor;
  url_slug: string;
}
export interface IAuthor {
  id: number;
  fullname: string;
}
export interface ICategory {
  category: string;
}
export interface IBookWithAuthor {
  id: number;
  created_at: Date;
  title: string;
  authorId: number;
  categoryId: number;
  detail: string;
  picture: string;
  authors: IAuthor;
  categories: ICategory;
  url_slug: string;
}

export type TBookTitleProps = {
  params: Promise<{ bookSlug: string }>;
};

export interface ICommentSubmit {
  email: string;
  comment: string;
  bookId: number;
}
export interface ICommentGet {
  id: number;
  email: string;
  comment: string;
  isApproved: boolean;
}
export type TPage =
  | "/"
  | "hakkinda"
  | "kitap"
  | "iletişim"
  | "/yayimlama-paketlerimiz"
  | "/iletişim";

export type ILink = "kitapyurdu" | "amazon" | "trendyol" | "dr";

export type ILinks = {
  [platform in ILink]: string;
};

export interface IPurchaseItem {
  title: ILink;
  image: StaticImageData;
}

export interface IPurchaseLinks extends IPurchaseItem {
  title: ILink;
  image: StaticImageData;
  link: string;
}
export interface ISlider {
  id: number;
  image_url: string;
  image_desc: string;
}

export interface IContact {
  phone_number: string;
  email: string;
  name: string;
  message: string;
}

export interface IPublishPackage {
  id: string;
  detail: string;
  title: string;
  picture: string;
}

