import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "../../redux/feature/review/reviewApi";
import { useAppSelector } from "../../redux/hook";
import { IReview } from "../../types/interface";
import Review from "./Review";

interface ReviewProp {
  id: string | undefined;
}

interface ReviewFormInputs {
  review: string;
}

export default function Reviews({ id }: ReviewProp) {
  const { user } = useAppSelector((state) => state.user);
  const [postReview, { isSuccess, isError }] = usePostReviewMutation();

  const { data: reviewData } = useGetReviewsQuery(id!);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormInputs>();

  const onSubmit = (data: ReviewFormInputs) => {
    const payload = { userEmail: "alnoman.cs@gmail.com", ...data };
    console.log(id, payload);
    postReview({ id, payload });
    reset();
  };

  useEffect(() => {
    if (isSuccess) toast.success("Your reivew is posted Successfully!");
    if (isError) toast.error("ailed to post your review 😔");
  }, [isSuccess, isError]);

  return (
    <div>
      <div>
        <h4>User reviews: </h4>
        <div className="mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 items-end">
              <textarea
                className="resize-none textarea textarea-primary w-[400px]"
                rows={4}
                placeholder="This book is ..."
                {...register("review", { required: "Review is required" })}
              ></textarea>
              <button className="btn btn-sm btn-primary">Submit</button>
            </div>
          </form>
          {reviewData?.reviews?.map((review: IReview) => (
            <Review key={review.userEmail} reviewDetails={review} bookId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
