import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/" }),
  endpoints: (builder) => ({
    getBooksByAuthor: builder.query({
      query: (name) => `books?authorId=${name}`,
    }),
    getBooksByCustomSearch: builder.query({
      query: (body) => ({
        url: `books/search`,
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useGetBooksByAuthorQuery, useLazyGetBooksByCustomSearchQuery } =
  searchApi;
