import { Modal, QRCode } from "antd";
import React, { useEffect, useState } from "react";
import { useUser } from "../../context";
import { MTContract } from "../../utils/services";
import AccountTicketCard from "../AccountTicketCard";
import styles from "./style.module.scss";

const AccountTickets = () => {
  const { account } = useUser();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [qrCode, setQrCode] = useState("");
  const handleChangeValue = (e) => setValue(e.target.value);

  const openModal = (id) => setQrCode(id);

  const renderCard = ({ id, type }, index) => {
    const open = () => openModal(id);
    return (
      <div className="nft_items">
        <AccountTicketCard
          open={open}
          ticketId={id}
          id={id}
          ticketType={type}
        />
      </div>
    );
  };

  const renderFilteredCard = () => {
    const dataFiltered = data.filter((item) =>
      item.id.toLowerCase().includes(value.toLowerCase())
    );
    return dataFiltered.map(renderCard);
  };

  useEffect(() => {
    (async () => {
      try {
        const tickets = await MTContract.getBalanceOf(account);
        setData(tickets);
      } catch (error) {
        setData([]);
      }
    })();
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
      <Modal
        centered
        footer={false}
        onCancel={() => setQrCode("")}
        open={!!qrCode}
      >
        <QRCode style={{ margin: "0 auto" }} value={qrCode} />
      </Modal>
    </div>
  );
};

export default AccountTickets;
