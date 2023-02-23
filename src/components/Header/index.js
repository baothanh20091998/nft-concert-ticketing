import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("navigation")}>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <Button>Connect wallet</Button>
        </header>
    );
}

export default Header;
