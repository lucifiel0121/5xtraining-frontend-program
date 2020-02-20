import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <>
      <ul className="pagination">
        <li
          className={
            currentPage === 1 ? 'pagination__prev pagination__disabled' : 'pagination__prev'
          }
          onClick={() => paginate(1)}
        >
          最首頁
        </li>
        <li
          className={
            currentPage === 1 ? 'pagination__prev pagination__disabled' : 'pagination__prev'
          }
          onClick={() => paginate(currentPage - 1)}
        >
          {'< 上一頁'}
        </li>
        {pageNumbers.map(num => (
          <li
            className={
              currentPage === num ? 'pagination__item pagination__item_actived' : 'pagination__item'
            }
            key={num}
            onClick={() => paginate(num)}
          >
            {num}
          </li>
        ))}
        <li
          className={
            currentPage === Math.ceil(totalPosts / postsPerPage)
              ? 'pagination__next pagination__disabled'
              : 'pagination__next'
          }
          onClick={() => paginate(currentPage + 1)}
        >
          {'下一頁 >'}
        </li>
        <li
          className={
            currentPage === Math.ceil(totalPosts / postsPerPage)
              ? 'pagination__next pagination__disabled'
              : 'pagination__next'
          }
          onClick={() => paginate(Math.ceil(totalPosts / postsPerPage))}
        >
          最末頁
        </li>
      </ul>
    </>
  );
};
export default Pagination;
