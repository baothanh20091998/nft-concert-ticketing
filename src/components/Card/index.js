import React from "react";
import ButtonCustom from "../ButtonCustom";
import styles from "./style.module.scss";

const src =
    "https://cdn.galxe.com/galaxy/dropsdao/1519737b-ee1f-475d-bca4-4dabffb95f76.png?optimizer=image&width=400&quality=100";

const Card = () => {
    return (
        <div className={styles["card-wrapper"]}>
            <div className="card">
                <div className="rank">1</div>

                <div className="front">
                    <img className="thumbnail" src={src} alt="" />
                    <h3 className="name">The Ocean Sound</h3>
                    <div className="stats">
                        <p className="viewers">250 Tickets</p>
                        <div className="tickets">
                            <img src={src} alt="" />
                            <img src={src} alt="" />
                            <img src={src} alt="" />
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
                        }}
                    >
                        See more tickets
                    </ButtonCustom>

                    <div className="tickets">
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 1</div>
                            <div className="type">Platinum</div>
                        </div>
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 2</div>
                            <div className="type">Plus</div>
                        </div>
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 3</div>
                            <div className="type">Standard</div>
                        </div>
                    </div>
                </div>

                <div className="background"></div>
            </div>
        </div>
    );
};

export default Card;
