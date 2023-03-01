import { Modal, Table } from "antd";
import { renderFooter } from "antd/es/modal/PurePanel";
import React, { useState } from "react";
import ButtonCustom from "../ButtonCustom";
import styles from "./style.module.scss";

const src =
    "https://i.seadn.io/gcs/files/548af77c24a4f80c0d93b187b7e70913.png?auto=format&w=136&h=136&fr=1";

const ListTicket = () => {
    const [modalStatus, setModalStatus] = useState({
        status: false,
        info: null,
    });

    const showModal = (info) => {
        setModalStatus({ ...modalStatus, status: true, info });
    };

    const handleCancel = () => {
        setModalStatus({ ...modalStatus, status: false });
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "info",
            key: "info",
            render: (info, record) => (
                <div className="info-box">
                    <span className="key">{record.key}</span>
                    <img src={info.image} alt="" />
                    <span>{info.name}</span>
                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => (
                <>
                    <span>{price} ETH</span>
                </>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: "10%",
            render: (record) => (
                <>
                    <ButtonCustom
                        onClick={() => {
                            showModal(record);
                        }}
                    >
                        Buy
                    </ButtonCustom>
                </>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            info: { name: "Ticket 1", image: src },
            price: 0.001,
        },
        {
            key: "2",
            info: { name: "Ticket 2", image: src },
            price: 0.002,
        },
        {
            key: "3",
            info: { name: "Ticket 3", image: src },
            price: 0.003,
        },
        {
            key: "4",
            info: { name: "Ticket 4", image: src },
            price: 0.004,
        },
        {
            key: "5",
            info: { name: "Ticket 5", image: src },
            price: 0.005,
        },
    ];

    const handleBuy = () => {
        console.log("123", modalStatus.info);
    };

    const renderModalContent = () => {
        if (!modalStatus.info) return <></>;
        const {
            info: { image, name },
            price,
        } = modalStatus.info;
        return (
            <div className="modal-content">
                <img src={image} alt="" />
                <div className="box">
                    <div className="box-item">
                        <span>Name:</span>
                        <h3>{name}</h3>
                    </div>
                    <div className="box-item">
                        <span>Price:</span>
                        <h3>{price} ETH</h3>
                    </div>
                </div>
            </div>
        );
    };

    const renderFooter = () => {
        return (
            <div className="footer-content">
                <ButtonCustom secondary onClick={handleCancel}>
                    Cancel
                </ButtonCustom>
                <ButtonCustom onClick={handleBuy}>Buy</ButtonCustom>
            </div>
        );
    };

    return (
        <div className={styles.ListTicketWrapper}>
            <Table columns={columns} dataSource={data} />
            <Modal
                className={styles.ModalContainer}
                title={<h2 style={{ textAlign: "center" }}>Review Checkout</h2>}
                open={modalStatus.status}
                width={600}
                footer={renderFooter()}
                closable={false}
            >
                {renderModalContent()}
            </Modal>
        </div>
    );
};

export default ListTicket;
