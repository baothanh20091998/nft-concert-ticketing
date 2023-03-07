import { Button } from "antd";
import React from "react";
import ButtonCustom from "../ButtonCustom";
import styles from "./style.module.scss";

const src =
  "https://cdn.galxe.com/galaxy/dropsdao/1519737b-ee1f-475d-bca4-4dabffb95f76.png?optimizer=image&width=400&quality=100";

const AccountTicketCard = ({ ticketId, id, typeTicket, open }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className="card">
        <div className="rank">{id}</div>

        <div className="front">
          <img className="thumbnail" src={src} alt="" />
          <h3 className="name">The Ocean Sound</h3>
        </div>
        <div className="back">
          <div className="tickets">
            <div className="ticket">
              {/* <div className="name">Ticket 1</div> */}
              <div className="name">{ticketId}</div>
              <div className="type">{typeTicket}</div>
              <ButtonCustom secondary onClick={open}>
                Show QR Code
              </ButtonCustom>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>
    </div>
  );
};

export default AccountTicketCard;
