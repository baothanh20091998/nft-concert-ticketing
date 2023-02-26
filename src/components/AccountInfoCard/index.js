import React from "react";
import styles from "./style.module.scss";
import images from "../../assets/images";
import { useUser } from "../../context";

const AccountInfoCard = () => {
  const { account } = useUser();

  return (
    <div className={styles.wrapper}>
      <img className="avatarImg" alt="" src={images.mainAvatar} />
      <p className="address">
        {account.slice(0, 8) + "..." + account.slice(-4)}
      </p>
    </div>
  );
};

export default AccountInfoCard;
