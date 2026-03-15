import Skeleton from "@/components/Skeleton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PosterSkeleton = styled(Skeleton)`
  width: 240px;
  max-height: 360px;
  max-width: 90vw;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const InfoSection = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
  min-height: 480px;
`;

const TitleSkeleton = styled(Skeleton)`
  width: 60%;
  height: 36px;
  margin-bottom: 8px;
`;

const SubtitleSkeleton = styled(Skeleton)`
  width: 40%;
  height: 24px;
  margin-bottom: 12px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-bottom: 8px;
`;

const MetaSkeleton = styled(Skeleton)`
  width: 90px;
  height: 18px;
  border-radius: 6px;
`;

const TagSkeleton = styled(Skeleton)`
  width: 60px;
  height: 22px;
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
`;

const DescriptionSkeleton = styled(Skeleton)`
  width: 100%;
  height: 60px;
  margin-top: 8px;
  border-radius: 8px;
`;

const TrailerTitleSkeleton = styled(Skeleton)`
  width: 30%;
  height: 28px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const TrailerSkeleton = styled(Skeleton)`
  width: 100%;
  max-width: 400px;
  height: 220px;
  border-radius: 12px;
`;

export const AnimeDetailSkeleton: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <PosterSkeleton />
        <InfoSection>
          <TitleSkeleton />
          <SubtitleSkeleton />
          <MetaRow>
            {[...Array(7)].map((_, i) => (
              <MetaSkeleton key={i} />
            ))}
          </MetaRow>
          <div>
            {[...Array(3)].map((_, i) => (
              <TagSkeleton key={i} />
            ))}
          </div>
          <DescriptionSkeleton />
          <TrailerTitleSkeleton />
          <TrailerSkeleton />
        </InfoSection>
      </FlexContainer>
    </Container>
  );
};
