import { Link } from "react-router-dom";

const GreenContainer = (props: any) => {
  const { medium } = props?.userInfo?.picture || {};

  return (
    <div className="greenContainer">
      <div className="greenInner">
        <div className="profilePic">
          <img src={medium} alt="profile-thumbnail" />
        </div>
        <div className="greet">
          <div className="greetTitle">Good day</div>
          <div className="greetSubtitle">See what your friends are doing!</div>
        </div>
        <div className="buttonBox">
          <Link to="/friends">
            <div className="buttonGreen">Check friends</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreenContainer;
