import { Typography } from "@/components";
import themeConfig from "@/config/theme";
import { useGetAnimeDetailQuery } from "@/services/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { AnimeDetailSkeleton } from "./components/Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PosterImage = styled.img`
  width: 240px;
  max-height: 360px;
  max-width: 90vw;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  background: ${themeConfig.colors.lightGray};
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  width: 100%;
  padding: 32px 24px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 8px;
    gap: 20px;
  }
`;

const InfoSection = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
  height: 100%;
`;

const Tag = styled.span`
  display: inline-block;
  background: ${themeConfig.colors.primary};
  color: #fff;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  font-size: 1rem;
  color: ${themeConfig.colors.neutral};
`;

const BackButton = styled.button`
  border: none;
  color: ${themeConfig.colors.primary};
  font-size: 1.5rem;
  align-self: flex-start;
  cursor: pointer;
  gap: 4px;
  display: flex;
  margin: 16px 0 0 20px;
  align-items: center;
  background: transparent;
`;

const AnimeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetAnimeDetailQuery(id ?? skipToken);

  const anime = data?.data?.attributes;

  const handleBackClick = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <AnimeDetailSkeleton />;
  }

  return (
    <Container>
      <BackButton onClick={handleBackClick}>
        <FiArrowLeft />
        <Typography variant="small">Back to List</Typography>
      </BackButton>
      <FlexContainer>
        <PosterImage
          src={anime?.posterImage?.original}
          alt={anime?.titles.en_jp || "Anime Poster"}
        />
        <InfoSection>
          <Typography
            variant="h3"
            style={{ color: themeConfig.colors.primary, marginBottom: 4 }}
          >
            {anime?.titles.en_jp}
          </Typography>
          <Typography variant="h5" color={themeConfig.colors.neutral}>
            {anime?.titles.ja_jp}
          </Typography>
          <MetaRow>
            <span>
              Episodes: <b>{anime?.episodeCount || "-"}</b>
            </span>
            <span>
              Type: <b>{anime?.showType || "-"}</b>
            </span>
            <span>
              Status: <b>{anime?.status || "-"}</b>
            </span>
            <span>
              Rating: <b>{anime?.averageRating || "-"}</b>
            </span>
            <span>
              Start: <b>{anime?.startDate || "-"}</b>
            </span>
            <span>
              End: <b>{anime?.endDate || "-"}</b>
            </span>
            <span>
              Age: <b>{anime?.ageRating || "-"}</b>
            </span>
          </MetaRow>
          {anime?.abbreviatedTitles && anime?.abbreviatedTitles.length > 0 && (
            <div style={{ margin: "8px 0" }}>
              {anime?.abbreviatedTitles?.map((t: string) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
          <Typography variant="h4">Synopsis</Typography>
          <Typography
            variant="body"
            style={{ marginTop: 8, color: themeConfig.colors.neutral }}
          >
            {anime?.synopsis ||
              anime?.description ||
              "No description available."}
          </Typography>
          {anime?.youtubeVideoId && (
            <>
              <Typography variant="h4">Watch Trailer</Typography>
              <LiteYouTubeEmbed
                id={anime.youtubeVideoId}
                title={anime.canonicalTitle || anime.titles.en_jp}
              />
            </>
          )}
        </InfoSection>
      </FlexContainer>
    </Container>
  );
};

export default AnimeDetail;
