import React, { useState } from "react";

import FriendList from "./FriendList";
import PaginationR from "../ui/Pagination";

const MIN_PAGE = 1;
const MAX_PAGE = 20;

const FriendContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="friendsContainer">
      <div className="friendsInner">
        <div className="friendsHeader">
          <div className="friendsHeaderTitle">Your friends</div>
          <div className="friendsHeaderSubtitle">
            Here are some details about your friends.
          </div>
        </div>
        <div className="friendsListContainer">
          <div className="friendsListInfo">
            Showing page {currentPage} of {MAX_PAGE}{" "}
          </div>
          <div className="friendsContent">
            <FriendList
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <PaginationR
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={MAX_PAGE}
            minPage={MIN_PAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendContainer;
