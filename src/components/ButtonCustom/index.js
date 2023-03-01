import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ButtonCustom = ({
    children,
    className,
    secondary,
    disabled,
    loading,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cx(
                styles.ButtonCustomWrapper,
                secondary && styles.Secondary,
                (disabled || loading) && styles.Disabled,
                className
            )}
        >
            {loading ? <Spin indicator={antIcon} /> : children}
        </button>
    );
};

export default ButtonCustom;
