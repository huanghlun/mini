import React, {Component} from 'react';
import styles from './Selector.css'

export default class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"flex flex-align-center " + styles.selectorContainer}>
                <div className="flex-1">
                    <p className={styles.selector}>类型</p>
                </div>
                <div className="flex-1">
                    <p className={styles.selector}>日期</p>
                </div>
            </div>
        )
    }
}