import { useNavigate } from "react-router-dom";

export default function BookList() {
  const navigate = useNavigate();
  return (
    <div className="_section">
      <h2 className="section-title">Recent Books</h2>
          <div>{
          
          }</div>
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
