import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { useDeleteReviewMutation } from "../../redux/feature/review/reviewApi";
import { useAppSelector } from "../../redux/hook";
import { IReviewProps } from "../../types/interface";
import UpdateReviewModel from "./UpdateReviewModel";

export default function Review({ reviewDetails, bookId }: IReviewProps) {
  const { user } = useAppSelector((state) => state.user);
  const userValidation = user?.email === reviewDetails?.userEmail;

  const [deleteReview] = useDeleteReviewMutation();
  const [updateReviewModal, setUpdateReviewModal] = useState(false);

  const onDeleteReview = () => {
    const payload = {
      id: bookId,
      email: user.email,
      review: reviewDetails?.review,
    };
    deleteReview(payload);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h4 className="font-light text-accent text-sm">
          {reviewDetails?.userEmail}
        </h4>
        {userValidation && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setUpdateReviewModal(true)}
              className="btn btn-sm bg-cyan-700 tooltip"
              data-tip="Update Review"
            >
              <FaPencil />
            </button>
            <button
              onClick={onDeleteReview}
              className="btn btn-sm bg-red-700 tooltip"
              data-tip="Delete Review"
            >
              <FaDeleteLeft />
            </button>
          </div>
        )}
      </div>
      <div className="flex gap-1 items-start">
        <BsArrowReturnRight className="text-lg text-slate-500" />
        <p>{reviewDetails?.review}</p>
      </div>
      {updateReviewModal && (
        <UpdateReviewModel
          setUpdateReviewModal={setUpdateReviewModal}
          reviewDetails={reviewDetails}
          bookId={bookId}
        />
      )}
    </div>
  );
}
