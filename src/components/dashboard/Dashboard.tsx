import React, { useState, useEffect } from "react";

import { fetchPerson } from "../../hooks/useFetch";
import GreenContainer from "./GreenContainer";
import InfoContainer from "./InfoContainer";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data = await fetchPerson();
        setUserInfo && setUserInfo(data.results[0]);

        setIsLoading(false);
      } catch (error) {
        console.log("Failed to request user info. Error: " + error);
      }
    })();
  }, []);

  if (isLoading) {
    return <span>Loading</span>;
  }

  if (!userInfo) {
    return <span>Something went wrong.</span>;
  }

  return (
    <div className="userInfoWrapper">
      <GreenContainer userInfo={userInfo} />
      <InfoContainer userInfo={userInfo} />
    </div>
  );
};

export default Dashboard;
