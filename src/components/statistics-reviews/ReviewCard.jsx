import React, { useState } from "react";
import ReactModal from "react-modal";
import CloseIcon from "../../assets/icons/CloseIcon";
import ZoomInIcon from "../../assets/icons/ZoomInIcon";

import styles from "./style.module.css";

const ReviewCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className={styles.reviewCardContainer}>
        <div className={styles.cardTitle}>{item.title}</div>
        <img src={item.img} alt={item.title} />
        <div className={styles.zoomInWrapper} onClick={handleToggleModal}>
          <ZoomInIcon />
          Увеличить
        </div>
      </div>
      <ReactModal isOpen={showModal} onRequestClose={handleToggleModal}>
        <div onClick={handleToggleModal} className={styles.closeWrapper}>
          <CloseIcon />
        </div>
        <img src={item.response} alt={item.title} />
      </ReactModal>
    </>
  );
};

export default ReviewCard;
