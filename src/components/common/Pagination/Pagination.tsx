import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Pagination.scss';

type PaginationProps = {
  currentPage: number
  pages?: number,
  pageSize: number,
  onSelect: (currentPage: number) => () => void,
};

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  pages,
  pageSize = 10,
  onSelect,
}) => {
  let items = [];
  const pageCount: number | undefined = pages ? Math.ceil(pages / pageSize) : undefined;

  if (pageCount && pageCount > 1) {
    for (let number = 1; number <= pageCount; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={onSelect(number)}
        >
          {number}
        </Pagination.Item>,
      );
    }
  }

  if (!pageCount || pageCount === 1) {
    items = [];
  }

  if (items.length === 0) return null;

  return (
    <Pagination size="sm" className="pagination">
      <Pagination.First
        disabled={currentPage === 1}
        onClick={onSelect(1)}
      />
      <Pagination.Prev
        onClick={onSelect(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {items}
      <Pagination.Next
        onClick={onSelect(currentPage + 1)}
        disabled={!!(currentPage >= items.length)}
      />
      <Pagination.Last
        disabled={!!(currentPage >= items.length)}
        onClick={onSelect(items.length)}
      />
    </Pagination>
  );
};
