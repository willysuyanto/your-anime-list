import React from "react";
import styled from "styled-components";
import themeConfig from "@/config/theme";
import { useNavigate } from "react-router";
import { useGetCategoriesQuery } from "@/services/api";
import { Pagination } from "@/components";

const Container = styled.div`
  padding: 20px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${themeConfig.colors.primary};
  font-size: 2.2rem;
  margin-bottom: 24px;
  text-align: center;
`;
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryCard = styled.button`
  background: #fff;
  border: none;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.07);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: 0 4px 24px 0 rgba(202, 0, 42, 0.13);
    transform: translateY(-2px) scale(1.03);
  }
`;

const CategoryTitle = styled.span`
  color: ${themeConfig.colors.primary};
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 8px;
`;
const CategoryDesc = styled.span`
  color: ${themeConfig.colors.neutral};
  font-size: 0.98rem;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Loading = styled.div`
  color: ${themeConfig.colors.primary};
  font-size: 1.2rem;
  margin-top: 40px;
`;

const PER_PAGE = 30;

const Categories: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();
  const { isFetching, data: categoryData } = useGetCategoriesQuery({
    page,
    perPage: PER_PAGE,
  });

  const categories = categoryData?.data || [];
  const total = categoryData?.meta?.count || 0;
  const totalPages = Math.ceil(total / PER_PAGE) || 1;

  const handleCategoryClick = (slug: string) => {
    navigate(`/anime?category=${slug}`);
  };

  return (
    <Container>
      <Title>Anime Categories</Title>
      {isFetching ? (
        <Loading>Loading categories...</Loading>
      ) : (
        <>
          <CategoryGrid>
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                onClick={() => handleCategoryClick(cat.attributes.slug)}
              >
                <CategoryTitle>{`${cat.attributes.title} (${cat.attributes.totalMediaCount})`}</CategoryTitle>
                <CategoryDesc>
                  {cat.attributes.description || "No description."}
                </CategoryDesc>
              </CategoryCard>
            ))}
          </CategoryGrid>
          <div style={{ margin: '32px 0 0 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default Categories;
