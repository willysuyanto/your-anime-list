import { Pagination, Typography } from "@/components";
import { useGetAnimeListQuery } from "@/services/api";
import type { AnimeData } from "@/services/types";
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import AnimeListItem, {
  AnimeListItemSkeleton,
} from "./components/AnimeListItem";
import styled from "styled-components";
import SearchField from "./components/SearchField";

const Container = styled.div`
  padding: 20px;
`;

const AnimeList: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { data, isFetching } = useGetAnimeListQuery({
    page: currentPage,
    perPage: 10,
    search: searchParams.get("query") || "",
  });

  const handlePageChange = (page: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
  };

  const handleItemClick = (id: string) => {
    navigate(`/anime/${id}`);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Trending Anime
        </Typography>
        <SearchField />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          minHeight: "800px",
        }}
      >
        {isFetching
          ? Array.from({ length: 10 }, (_, index) => (
              <AnimeListItemSkeleton key={index} />
            ))
          : data &&
            data.data.map((anime: AnimeData) => (
              <AnimeListItem
                key={anime.id}
                item={anime.attributes}
                onClick={() => handleItemClick(anime.id)}
              />
            ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data?.meta.count ? Math.ceil(data.meta.count / 10) : 1}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default AnimeList;
