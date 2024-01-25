export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  addedBy: string | null;
}

export interface IReviewProps {
  bookId: string | undefined;
  reviewDetails: IReview;
}

export interface IReview {
  userEmail: string;
  review: string;
}
