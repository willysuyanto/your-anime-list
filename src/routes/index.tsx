import { Navigate, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const AnimeList = lazy(() => import("@/features/AnimeList"));
const AnimeDetail = lazy(() => import("@/features/AnimeDetail"));
const Categories = lazy(() => import("@/features/Categories"));

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/anime" />} />
        <Route path="anime" element={<AnimeList />} />
        <Route path="anime/:id" element={<AnimeDetail />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}
