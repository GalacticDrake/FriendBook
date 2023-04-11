import React, { useState, useEffect } from "react";

import { fetchFriends } from "../../hooks/useFetch";
import Card from "../ui/Card";

const FriendList = (props: any) => {
  const { currentPage } = props || {};
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const showModal = (index: any) => {
    setSelectedIndex && setSelectedIndex(index);
    setViewModal && setViewModal(true);
  };

  const hideModal = () => {
    setSelectedIndex && setSelectedIndex(-1);
    setViewModal && setViewModal(false);
  };

  useEffect(() => {
    viewModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [viewModal]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data = await fetchFriends(currentPage);
        setData && setData(data);

        setIsLoading(false);
      } catch (error) {
        console.log(
          "Failed to request friends, something is broken. Error: " + error
        );
      }
    })();
  }, [currentPage]);

  if (isLoading) {
    return <span>Loading</span>;
  }

  if (!data) {
    return <span>No friends found.</span>;
  }

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <Card
              key={item?.name?.first}
              item={item}
              showModal={showModal}
              hideModal={hideModal}
              viewModal={viewModal}
              index={index}
              selectedIndex={selectedIndex}
            />
          );
        })}
    </>
  );
};

export default FriendList;
