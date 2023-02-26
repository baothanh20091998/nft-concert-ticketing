import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";

const ButtonCustom = ({ children, className, secondary, ...props }) => {
    return (
        <button
            {...props}
            className={cx(
                styles.ButtonCustomWrapper,
                secondary && styles.Secondary,
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonCustom;
