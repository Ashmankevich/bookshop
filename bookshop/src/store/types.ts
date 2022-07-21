export type RequestStatusType = "idle" | "loading" | "success" | "error";

export type NewBooks = {
  error: any;
  books: Book[];
  total: string;
  status: RequestStatusType;
};

export type Book = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
};

export type BookApi = {
  books: Book[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: any;
};

export type BooksApiResult = {
  error: any;
  page: string;
  total: string;
  books: Book[];
};

export type keyWords = {
  title: string;
  page: string;
};

export type User = {
  isSignIn: boolean;
  email: string | undefined;
  name: string | undefined;
  password: string | undefined;
};

export type Cart = {
  cart: BookCartApi[];
  total: number;
};

export type BookCartApi = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  publisher: string;
  rating: string;
  authors: string;
  amount: number;
};
