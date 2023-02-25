import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";

const ButtonCustom = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={cx(styles.ButtonCustomWrapper, className)}
        >
            {children}
        </button>
    );
};

export default ButtonCustom;
