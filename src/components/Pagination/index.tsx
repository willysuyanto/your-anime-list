import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        gap: 4px;
    }
`;

const PageButton = styled.button<{ active?: boolean }>`
    padding: 6px 12px;
    border: none;
    background: ${({ active, theme }) => (active ? theme.colors.primary : '#f0f0f0')};
    color: ${({ active }) => (active ? '#fff' : '#333')};
    border-radius: 4px;
    cursor: pointer;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    font-size: 1rem;
    &:disabled {
        background: #e0e0e0;
        color: #aaa;
        cursor: not-allowed;
    }

    @media (max-width: 600px) {
        padding: 2px 6px;
        font-size: 0.8rem;
    }
`;

const Ellipsis = styled.span`
    padding: 0 8px;
    color: #888;
    font-size: 1rem;

    @media (max-width: 600px) {
        padding: 0 2px;
        font-size: 0.8rem;
    }
`;

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <PaginationContainer>
            <PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </PageButton>
            {getPageNumbers().map((page, idx) =>
                typeof page === 'number' ? (
                    <PageButton
                        key={page}
                        active={page === currentPage}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </PageButton>
                ) : (
                    <Ellipsis key={`ellipsis-${idx}`}>...</Ellipsis>
                )
            )}
            <PageButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </PageButton>
        </PaginationContainer>
    );
};

export default Pagination;