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
