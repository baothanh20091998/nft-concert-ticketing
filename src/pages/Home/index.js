import React from "react";
import Card from "../../components/Card";
import styles from "./style.module.scss";

const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
            <h1 className="banner-title">THE METAVERSE CONCERT</h1>
            <Card />
        </div>
    );
};

export default Home;
