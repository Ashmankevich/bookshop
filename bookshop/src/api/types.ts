export type NewBooksApi = {
  books: NewBookApi[];
  error: string;
  total: string;
};

export type NewBookApi = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
};
