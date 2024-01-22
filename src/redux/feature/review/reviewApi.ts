import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    postReview: build.mutation({
      query: ({ id, payload }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: payload,
      }),
    }),

    getAllReviews: build.query({
      query: () => "reviews",
      providesTags: ["Reviews"],
    }),
  }),
});

export const { useGetAllReviewsQuery, usePostReviewMutation } = reviewApi;
