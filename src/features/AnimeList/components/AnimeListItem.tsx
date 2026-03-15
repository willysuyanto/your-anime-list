import { Typography } from "@/components";
import Skeleton from "@/components/Skeleton";
import { themeConfig } from "@/config";
import type { Attributes } from "@/services/types";
import React from "react";
import styled from "styled-components";

type AnimeListItemProps = {
  item: Attributes;
  onClick?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  max-width: calc(20% - 13px);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: calc(50% - 8px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const PosterImage = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubType = styled.div`
  padding: 2px 8px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 100;
`;

const Rating = styled.div`
  padding: 2px 8px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 100;
`;

const AnimeListItemSkeleton = styled(Skeleton)`
  width: 100%;
  max-width: calc(20% - 13px);

  @media (max-width: 768px) {
    max-width: calc(50% - 8px);
  }
`;

const AnimeListItem: React.FC<AnimeListItemProps> = ({ item, onClick }) => {
  return (
    <Container onClick={onClick}>
      <SubType>
        <Typography variant="small" color={themeConfig.colors.lightGray}>
          {item.subtype?.toUpperCase()}
        </Typography>
      </SubType>
      <Rating>
        <Typography variant="small" color={themeConfig.colors.lightGray}>
          {item.ageRating ? item.ageRating : "N/A"}
        </Typography>
      </Rating>
      <ImageContainer>
        <PosterImage src={item.posterImage.medium} alt={item.titles.en_us} />
      </ImageContainer>
      <Content>
        <Typography variant="h6">
          {item.canonicalTitle || item.titles.en || item.titles.ja_jp}
        </Typography>
        <Typography variant="subtitle">{item.titles.ja_jp}</Typography>
      </Content>
    </Container>
  );
};

export default AnimeListItem;
export { AnimeListItemSkeleton };
