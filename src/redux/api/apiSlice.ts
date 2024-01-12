import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/",
  }),
  tagTypes: ["Books"],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
  }),
});

export const { useGetAllBooksQuery } = api;
