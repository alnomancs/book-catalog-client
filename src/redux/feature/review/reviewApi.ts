import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: (id: string) => `/reviews/${id}`,
      providesTags: ["Reviews"],
    }),

    postReview: build.mutation({
      query: ({ id, payload }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: { payload },
      }),
      invalidatesTags: ["Reviews"],
    }),

    updateReview: build.mutation({
      query: ({ id, email, review }) => ({
        url: `/review/${id}/${email}`,
        method: "PATCH",
        body: { review },
      }),
      invalidatesTags: ["Reviews"],
    }),

    deleteReview: build.mutation({
      query: ({ id, email }) => ({
        url: `/review/${id}/${email}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  usePostReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
