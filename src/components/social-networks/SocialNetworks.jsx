import clsx from "clsx";
import React from "react";
import FacebookWithCircle from "../../assets/icons/FacebookWithCircle";
import TelegramFill from "../../assets/icons/TelegramFill";
import VkWithCircle from "../../assets/icons/VkWithCircle";
import YoutubeWithCircle from "../../assets/icons/YoutubeWithCircle";

import styles from "./style.module.css";

const SocialNetworks = ({ socialNetworksWrapper }) => {
  return (
    <div className={clsx(styles.socialNetworks, socialNetworksWrapper)}>
      <a href="https://web.telegram.org/" aria-label="telegram">
        <TelegramFill />
      </a>
      <a href="https://vk.com/" aria-label="vk">
        <VkWithCircle />
      </a>
      <a href="https://vk.com/" aria-label="youtube">
        <YoutubeWithCircle />
      </a>
      <a href="https://www.facebook.com/" aria-label="facebook">
        <FacebookWithCircle />
      </a>
    </div>
  );
};

export default SocialNetworks;
