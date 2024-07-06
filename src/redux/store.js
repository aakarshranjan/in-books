import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import { searchApi } from "../services/data";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});
