export interface Book {
  id: string;
  volumeInfo: {
    pageCount: number;
    infoLink: string;
    imageLinks?: {
      thumbnail: string;
    };
    title: string;
  };
}

export interface initialProps {
  book: string;
  result: Book[];
  error: string | null;
  loading: boolean;
}
