import React, { Component } from 'react';
import styles from './Modal.css';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var show = this.props.show,
            confirmHandler = this.props.confirmHandler,
            cancelHandler = this.props.cancelHandler;
        return (
            <div className={styles.modalContainer + (show ? "" : (" " + styles.hideContainer))}>
                <div className={styles.hideModal + (show ? (" " + styles.modal) : "")}>
                    <div className={styles.modalContent}>
                        <p className={styles.modalTitle}>{this.props.title}</p>
                        <p className={styles.modalDesc}>{this.props.desc}</p>
                    </div>
                    <div className={"flex flex-align-center " + styles.modalButton}>
                        <span className={"flex-1 " + styles.button} onClick={cancelHandler}>{this.props.cancelButton}</span>
                        <span className={"flex-1 " + styles.button} onClick={confirmHandler}>{this.props.confirmButton}</span>
                    </div>
                </div>
            </div>
        )
    }
}