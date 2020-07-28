import React from "react";
import Pagination from "react-js-pagination";

interface Props {
  totalItems: number;
  activePage: number;
  changed: (currentPage: number) => void;
}

const paginate: React.FC<Props> = (props) => {
  return (
    <Pagination
      onChange={(currentPageNumber) => props.changed(currentPageNumber)}
      activePage={props.activePage}
      itemsCountPerPage={10}
      totalItemsCount={props.totalItems}
      pageRangeDisplayed={5}
      itemClass="page-item"
      linkClass="page-link"
    />
  );
};

export default paginate;
