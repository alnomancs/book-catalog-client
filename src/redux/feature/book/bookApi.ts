import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
