import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AnimeDetailResponse,
  AnimeListParams,
  AnimeResponse,
  CategoryParams,
  CategoryResponse,
} from "./types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/vnd.api+json");
      headers.set("Accept", "application/vnd.api+json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAnimeList: builder.query<AnimeResponse, AnimeListParams>({
      query: (params) => {
        const { page = 1, perPage = 10, search = "" } = params;
        const offset = page * perPage;
        return {
          method: "GET",
          url: `/anime?page[limit]=${perPage}&page[offset]=${offset}&filter[text]=${search || ""}`,
        };
      },
    }),
    getAnimeDetail: builder.query<AnimeDetailResponse, string>({
      query: (id: string) => ({
        method: "GET",
        url: `/anime/${id}`,
      }),
    }),
    getCategories: builder.query<CategoryResponse, CategoryParams>({
      query: (params) => {
        const { page = 1, perPage = 30 } = params;
        const offset = page * perPage;
        return {
          method: "GET",
          url: `/categories?page[limit]=${perPage}&page[offset]=${offset}`,
        };
      },
    }),
  }),
});

export const {
  useGetAnimeListQuery,
  useGetAnimeDetailQuery,
  useGetCategoriesQuery,
} = api;
