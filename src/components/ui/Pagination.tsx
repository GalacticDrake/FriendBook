import React, { useRef, useState, useEffect } from "react";

import PrintErrorMessage from "../error/PrintErrorMessage";
import Pagination from "@mui/material/Pagination";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#FFFFFF",
  textTransform: "none",
  fontFamily: '"Poppins", sans-serif',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const PaginationR = (props: any) => {
  const { currentPage, setCurrentPage, maxPage, minPage } = props || {};
  const inputRef = useRef(currentPage);
  const [error, setError] = useState("");

  const updatePage = () => {
    const pageEntered = parseInt(inputRef?.current?.value);
    setError && setError("");

    if (pageEntered >= minPage && pageEntered <= maxPage) {
      console.log("pages from " + minPage + " to " + maxPage);
      setCurrentPage && setCurrentPage(pageEntered);
    } else {
      setError && setError("You have entered a number which is out of range.");
    }

    inputRef.current.value = "";
  };

  useEffect(() => {
    setError && setError("");
  }, [currentPage]);

  return (
    <div className="paginationContainer">
      <div className="paginationInner">
        <Pagination
          count={maxPage}
          onChange={(event, page) => setCurrentPage(page)}
          page={currentPage}
        />
      </div>
      <div className="searchContainer">
        {<PrintErrorMessage message={error} />}
        <div className="pageSearch">
          <div className="pageSearchLabel">Jump to page: </div>
          <div className="pageSearchInner">
            <input ref={inputRef} type="number" name="pagination" />
            <CustomButton onClick={updatePage}>Go</CustomButton>
          </div>
        </div>
      </div>

      {/* <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevState: number) => prevState - 1)}
        >
          Prev
        </button>
        <p>{currentPage}</p>
        <button
          disabled={currentPage >= maxPage}
          onClick={() => setCurrentPage((prevState: number) => prevState + 1)}
        >
          Next
        </button>
        <input ref={inputRef} type="number" name="pagination" />
        <button onClick={updatePage}>Go</button>
        {<PrintErrorMessage message={error} />}
      </div> */}
    </div>
  );
};

export default PaginationR;
