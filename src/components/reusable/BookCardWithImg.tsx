import { useNavigate } from "react-router-dom";
import { IBook } from "../../types/interface";

export default function BookCardWithImg({ book }: { book: IBook }) {
  const navigate = useNavigate();

  return (
    <div className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="book card image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title.slice(0, 23)}</h2>
        <div className="badge badge-secondary">{book.author}</div>
        <p className="font-light">
          <span className="font-semibold">Publicatio Date: </span>{" "}
          {book.publicationDate}
        </p>
        <div className="card-actions ">
          <div className="badge badge-sm badge-outline">{book.genre}</div>
        </div>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => navigate(`/book-details/${book._id}`)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}
