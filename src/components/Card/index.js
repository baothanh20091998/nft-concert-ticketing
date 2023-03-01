import React from "react";
import {
    IMAGE_DIAMOND,
    IMAGE_GOLD,
    IMAGE_PLATINUM,
} from "../../utils/constants";
import ButtonCustom from "../ButtonCustom";
import styles from "./style.module.scss";

const src =
    "https://cdn.galxe.com/galaxy/dropsdao/1519737b-ee1f-475d-bca4-4dabffb95f76.png?optimizer=image&width=400&quality=100";

const TICKET = [
    { type: "Diamond", src: IMAGE_DIAMOND },
    { type: "Platinum", src: IMAGE_PLATINUM },
    { type: "Gold", src: IMAGE_GOLD },
];

const Card = () => {
    return (
        <div className={styles["card-wrapper"]}>
            <div className="card">
                {/* <div className="rank">1</div> */}

                <div className="front">
                    <img className="thumbnail" src={src} alt="" />
                    <h3 className="name">The Ocean Sound</h3>
                    <div className="stats">
                        <p className="viewers">250 Tickets</p>
                        <div className="tickets">
                            {TICKET.map((ticket) => (
                                <img src={ticket.src} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="ticket-info">
                        <div className="card-stat">
                            500<span>Total tickets</span>
                        </div>
                        <div className="card-stat">
                            250<span>Remaining</span>
                        </div>
                    </div>

                    <ButtonCustom
                        className="btn"
                        onClick={() => {
                            console.log(123);
                            window.scrollTo({
                                left: 0,
                                top: document.body.scrollHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        See more tickets
                    </ButtonCustom>

                    <div className="tickets">
                        {TICKET.map((ticket, idx) => {
                            console.log("idx :>> ", idx);
                            return (
                                <div className="ticket">
                                    <div className="icon">
                                        <img src={ticket.src} alt="" />
                                    </div>
                                    <div className="type">{ticket.type}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="background"></div>
            </div>
        </div>
    );
};

export default Card;
