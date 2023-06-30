export interface Book {
  id: string;
  volumeInfo: {
    subtitle: string;
    pageCount: number;
    description: string;
    authors: string[];
    infoLink: string;
    previewLink: string;
    publisher: string;
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
  initialBooksLoaded: boolean;
}
