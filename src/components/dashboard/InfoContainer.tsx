const InfoContainer = (props: any) => {
  const { userInfo } = props || {};

  const { first, last, title } = userInfo?.name || {};
  const { street, city, state, country, postcode } = userInfo?.location || {};
  const { email, phone } = userInfo || {};

  return (
    <div className="userInfoContainer">
      <div className="nameContainer">
        <div className="nameGreet">
          Hi, {first + " "}
          {last}
        </div>
        <div className="welcomeGreet">How are you doing today?</div>
      </div>
      <div className="infoContainer">
        <div className="infoSectTitle">Personal Details</div>
        <div className="infoInner">
          <div className="infoRow">
            <div className="infoTitle">Title</div>
            <div className="infoContent">{title}</div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">First name</div>
            <div className="infoContent">{first}</div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">Last name</div>
            <div className="infoContent">{last}</div>
          </div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoSectTitle">Address</div>
        <div className="infoInner">
          <div className="infoRow">
            <div className="infoTitle">Street</div>
            <div className="infoContent">
              {street?.number + " " + street?.name}
            </div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">City</div>
            <div className="infoContent">{city}</div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">State</div>
            <div className="infoContent">{state}</div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">Postcode</div>
            <div className="infoContent">{postcode}</div>
          </div>
          <div className="infoRow">
            <div className="infoTitle">Country</div>
            <div className="infoContent">{country}</div>
          </div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoSectTitle">Contact Information</div>
        <div className="infoRow">
          <div className="infoTitle">Phone</div>
          <div className="infoContent">{phone}</div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoSectTitle">Email</div>
        <div className="infoRow">
          <div className="infoContent">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
