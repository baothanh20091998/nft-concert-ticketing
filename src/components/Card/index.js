import React from "react";
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
                    <h3 className="name">Card name</h3>
                    <div className="stats">
                        <p className="viewers">539.9k</p>
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
                            559K<span>Watched</span>
                        </div>
                        <div className="card-stat">
                            25.8K<span>Watched</span>
                        </div>
                    </div>

                    <button className="btn">See more ticket</button>

                    <div className="tickets">
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 1</div>
                            <div className="number">36.1k</div>
                        </div>
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 2</div>
                            <div className="number">35.1k</div>
                        </div>
                        <div className="ticket">
                            <div className="icon">
                                <img src={src} alt="" />
                            </div>
                            <div className="name">Ticket 3</div>
                            <div className="number">34.1k</div>
                        </div>
                    </div>
                </div>

                <div className="background"></div>
            </div>
        </div>
    );
};

export default Card;
