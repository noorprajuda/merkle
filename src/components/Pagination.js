import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <div
          key={number}
          className="page-item mr-5 cursor-pointer text-blue-700 text-xl"
        >
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </div>
      ))}
    </>
  );
};

export default Pagination;
