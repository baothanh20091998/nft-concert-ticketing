import React, { useEffect, useState } from "react";
import { useUser } from "../../context";
import AccountTicketCard from "../AccountTicketCard";
import styles from "./style.module.scss";

const AccountTickets = () => {
  const { account } = useUser();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleChangeValue = (e) => setValue(e.target.value);

  const renderCard = ({ ticketId, ticketType }, index) => {
    return (
      <div className="nft_items">
        <AccountTicketCard
          ticketId={ticketId}
          id={index + 1}
          ticketType={ticketType}
        />
      </div>
    );
  };

  const renderFilteredCard = () => {
    const dataFiltered = data.filter((item) =>
      item.ticketId.toLowerCase().includes(value.toLowerCase())
    );
    return dataFiltered.map(renderCard);
  };

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tikets") || "[]");
    if (tickets.length > 0) {
      const i = tickets.findIndex((item) => item.address == account);
      if (i !== -1) {
        setData(tickets[i].tickets);
      }
    }
  }, []);

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
