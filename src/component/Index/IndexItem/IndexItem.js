import React, { Component } from 'react';
import styles from './IndexItem.css';
import { JOB_ICON, SEX_ICON } from './constant.js';
import { Link } from 'react-router-dom';

export default class IndexItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var item = this.props;
        return (
            <Link to={"/detail/" + item.id + '/' + item.userId}>
                <div className={styles.indexItem}>
                    <p className="flex flex-align-center">
                        <img src={JOB_ICON[item.task_type]} className="job_icon flex-none"/>
                        <span className={"flex-none " + styles.itemText}>{item.release_time}</span>
                        <img src={SEX_ICON[this.props.gender]} className="sex_icon flex-none"/>
                    </p>
                    <p className={styles.itemTitle}>
                        {item.task_title}
                    </p>
                    <p className={styles.itemDesc}>
                        {item.description_pub}
                    </p>
                </div>
            </Link>
        )
    }
}