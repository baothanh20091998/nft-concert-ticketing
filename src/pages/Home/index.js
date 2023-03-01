import React from "react";
import Card from "../../components/Card";
import ListTicket from "../../components/ListTicket";
import styles from "./style.module.scss";

const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
            {/* <h1 className="banner-title">THE METAVERSE CONCERT</h1> */}
            <section className="card-section">
                <Card />
            </section>
            <section className="list-ticket-section">
                <ListTicket />
            </section>
        </div>
    );
};

export default Home;
