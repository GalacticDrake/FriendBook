import React from "react";

import Modal from "../ui/Modal";

const Card = (props: any) => {
  const { name, email, phone, picture, location, dob } = props.item || {};
  const { viewModal, hideModal, showModal } = props || {};
  const { index, selectedIndex } = props || {};

  const { thumbnail, medium } = picture || {};
  const { first, last } = name || {};
  const { city, country } = location || {};
  const { date } = dob || {};

  const fullname =
    first === "Petra" && last === "Njærheim"
      ? "Petra Njærheim (You)"
      : first + " " + last;

  return (
    <>
      <div className="card" onClick={() => showModal(index)}>
        <div className="cardInner">
          <div className="profilePic profilePicFriend">
            <img src={thumbnail} alt="pic" />
          </div>
          <div className="cardDetails">
            <div className="cardName">{fullname}</div>
            <div className="cardContent">
              <div className="cardSubtitle">{email}</div>
              <div className="cardSubtitle">{phone}</div>
            </div>
          </div>
        </div>
      </div>
      {viewModal && (
        <Modal
          viewModal={viewModal}
          handleClose={hideModal}
          index={index}
          selectedIndex={selectedIndex}
        >
          <div className="modalContents">
            <div className="profilePic">
              <img src={medium} alt="pic" />
            </div>
            <div className="modalHeader">
              <div className="modalName">{first + " " + last}</div>
              <div className="modalContent">
                <div className="modalSubtitle">{email}</div>
                <div className="modalSubtitle">{phone}</div>
              </div>
            </div>
            <div className="modalDetail">
              <div className="modalDetailSubject">Details</div>
              <div className="modalDetailInner">
                <div className="modalRow">
                  <div className="modalDetailTitle">Birthday</div>
                  <div className="modalDetailContent">
                    {date.substring(0, 10)}
                  </div>
                </div>
                <div className="modalRow">
                  <div className="modalDetailTitle">City</div>
                  <div className="modalDetailContent">{city}</div>
                </div>
                <div className="modalRow">
                  <div className="modalDetailTitle">Country</div>
                  <div className="modalDetailContent">{country}</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
