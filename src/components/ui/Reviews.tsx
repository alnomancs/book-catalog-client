import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePostReviewMutation } from "../../redux/feature/review/reviewApi";

interface ReviewProp {
  id: string | undefined;
}

interface ReviewFormInputs {
  review: string;
}

export default function Reviews({ id }: ReviewProp) {
  const [postReview, { isSuccess, isError }] = usePostReviewMutation();
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
        <h4>User reviews:</h4>

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
        </div>
      </div>
    </div>
  );
}
