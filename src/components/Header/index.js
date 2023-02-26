import React, { useContext, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { formatAddress, formatNumberBro } from "../../utils";
import { UserContext } from "../../context";
import ButtonCustom from "../ButtonCustom";
import { Spin } from "antd";

const cx = classNames.bind(styles);

function Header() {
    // context
    const { account, contract, balance, connectWallet, getBalance } =
        useContext(UserContext);

    useEffect(() => {
        getBalance(account);
    }, [account]);

    return (
        <header className={cx("wrapper")}>
            <h1 className={cx("logo")}>
                <Link to="/">
                    <span>NFT</span>icket
                </Link>
            </h1>
            <div className={cx("action")}>
                <div className={cx("navigation")}>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                {account ? (
                    <div className={cx("account")}>
                        <p>
                            {balance ? (
                                <span className={cx("balance")}>
                                    {formatNumberBro(balance)} ETH
                                </span>
                            ) : (
                                <Spin />
                            )}
                        </p>
                        <p>{formatAddress(account, 6)}</p>
                    </div>
                ) : (
                    <ButtonCustom secondary onClick={connectWallet}>
                        Connect wallet
                    </ButtonCustom>
                )}
            </div>
        </header>
    );
}

export default Header;
