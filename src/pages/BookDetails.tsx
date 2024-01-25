import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Reviews from "../components/ui/Reviews";

export default function BookDetails() {
  const { id } = useParams();
  return (
    <div className="page_main">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <img
          className="h-80 rounded-lg"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="book card image"
        />
        <div>
          <h4>
            {" "}
            book title <span>by author</span>{" "}
          </h4>
          <span className="badge badge-info">Book genre</span>
          <p>
            Published On:
            <span>book publication date</span>
          </p>

          <div className="flex items-center gap-x-2 mt-2">
            <h4>Action Center : </h4>
            <button
              type="button"
              className="btn btn-sm bg-cyan-700 tooltip"
              data-tip="Update book"
            >
              {" "}
              <FaPencil />{" "}
            </button>
            <button
              type="button"
              className="btn btn-sm bg-red-700 tooltip"
              data-tip="Delete book"
            >
              {" "}
              <FaDeleteLeft />{" "}
            </button>
          </div>
        </div>
      </div>

      <Reviews id={id} />
    </div>
  );
}
