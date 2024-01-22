import { useNavigate } from "react-router-dom";
import BookCardWithImg from "../components/reusable/BookCardWithImg";
import Loading from "../components/reusable/Loading";
import { useGetAllBooksQuery } from "../redux/feature/book/bookApi";
import { IBook } from "../types/interface";

export default function BookList() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  return (
    <div className="_section">
      <h2 className="section-title">Recent Books</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {data?.data?.slice(0, 10)?.map((book: IBook) => (
          <BookCardWithImg key={book._id} book={book} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/all-books")}
        >
          View All Books
        </button>
      </div>
    </div>
  );
}
