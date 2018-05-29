import React, { Component } from 'react';
import styles from './IndexItem.css';
import { JOB_ICON, SEX_ICON } from './constant.js';

export default class IndexItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.indexItem}>
                <p className="flex flex-align-center">
                    <img src={JOB_ICON[this.props.type]} className="job_icon flex-none"/>
                    <span className={"flex-none " + styles.itemText}>{this.props.date}</span>
                    <img src={SEX_ICON[this.props.sex]} className="sex_icon flex-none"/>
                </p>
                <p className={styles.itemTitle}>
                    {this.props.title}
                </p>
                <p className={styles.itemDesc}>
                    {this.props.desc}
                </p>
            </div>
        )
    }
}