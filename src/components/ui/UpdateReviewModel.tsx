import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdateReviewMutation } from "../../redux/feature/review/reviewApi";
import { IReview } from "../../types/interface";

interface IUpdateReviewModalProps {
  setUpdateReviewModal: (value: boolean) => void;
  reviewDetails: IReview;
  bookId: string | undefined;
}

export default function UpdateReviewModel({
  setUpdateReviewModal,
  reviewDetails,
  bookId,
}: IUpdateReviewModalProps) {
  const [review, setReview] = useState(reviewDetails?.review);

  const [updateReview, { isError, isSuccess }] = useUpdateReviewMutation();

  const onUpdateReview = () => {
    const payload = { id: bookId, email: reviewDetails?.userEmail, review };
    updateReview(payload);
    setTimeout(() => {
      setUpdateReviewModal(false);
    }, 1200);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("successfully update you review");
    }
    if (isError) toast.error("Failed to update your review");
  });

  return (
    <div className="modal modal-open  flex items-center justify-center">
      <div className="modal-box" onSubmit={onUpdateReview}>
        <button
          className="btn btn-sm btn-warning btn-circle absolute right-2 top-2"
          onClick={() => setUpdateReviewModal(false)}
        >
          X
        </button>
        <h3>Update Your Review</h3>
        <textarea
          name=""
          id=""
          className="resize-none textarea text-primary w-full mt-2 border-primary"
          rows={4}
          placeholder="This book is ...."
          defaultValue={reviewDetails.review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <div className="modal-action">
          <button
            className="btn btn-success"
            onClick={onUpdateReview}
            type="submit"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
