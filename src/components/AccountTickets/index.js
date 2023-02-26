import React, { useState } from "react";
import { useUser } from "../../context";
import AccountTicketCard from "../AccountTicketCard";
import styles from "./style.module.scss";

const AccountTickets = () => {
  const { account } = useUser();
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    { hash: account, type: "Diamond" },
    { hash: account, type: "Gold" },
    { hash: account, type: "Bronze" },
    { hash: account, type: "Silver" },
    { hash: account, type: "Silver" },
    { hash: account, type: "Bronze" },
    { hash: account, type: "Diamond" },
    { hash: account, type: "Diamond" },
    { hash: account, type: "Gold" },
  ]);
  const handleChangeValue = (e) => setValue(e.target.value);

  const renderCard = ({ hash, type }, index) => {
    return (
      <div className="nft_items">
        <AccountTicketCard hash={hash} id={index + 1} type={type} />
      </div>
    );
  };

  const renderFilteredCard = () => {
    const dataFiltered = data.filter((item) =>
      item.hash.toLowerCase().includes(value.toLowerCase())
    );
    return dataFiltered.map(renderCard);
  };

  return (
    <div className={styles.wrapper}>
      <p>Your Tickets</p>
      <input
        onChange={handleChangeValue}
        className="search__input"
        name="search"
        value={value}
        placeholder="Search by hash..."
      />
      <div className="nft__list">{renderFilteredCard()}</div>
    </div>
  );
};

export default AccountTickets;
