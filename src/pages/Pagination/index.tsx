import React, { useContext } from 'react';

import { IssuesContext } from '../../contexts/IssuesContext';
import { Container } from './styles';

const Pagination: React.FC = () => {
  const { pagesBtn, currentPage, handleCurrentPage } = useContext(
    IssuesContext,
  );

  if (!pagesBtn) return null;

  return (
    <Container>
      {Array.from(Array(pagesBtn), (_, index) => {
        return (
          <button
            key={index}
            value={index}
            type="button"
            onClick={() => handleCurrentPage(Number(index))}
            className={currentPage === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        );
      })}
    </Container>
  );
};

export default Pagination;
