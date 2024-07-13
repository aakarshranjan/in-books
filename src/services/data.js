import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getBooksByAuthor: builder.query({
      query: (name) => `books?authorId=${name}`,
    }),
    getBooksByCustomSearch: builder.query({
      query: (body) => {
        console.log('1212131',body)
        return {
        url: `books/search`,
        method: "post",
        body,
      }
    },
    }),
  }),
});

export const { useGetBooksByAuthorQuery, useLazyGetBooksByCustomSearchQuery } =
  searchApi;
