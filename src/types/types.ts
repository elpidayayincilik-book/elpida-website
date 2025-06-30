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
}

export type TBookTitleProps = {
  params: {
    bookTitle: string;
  };
};
