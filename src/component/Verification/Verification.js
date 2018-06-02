import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Verification.css';

export default class Verification extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.verificationBox}>
                <div className={styles.getUserMessage}>
                    <input type="text" className={styles.englishName} placeholder="英文名"/>
                    <input type="text" className={styles.idCard} placeholder="工卡号"/>
                </div>
                <NavLink to="/verificationFail">
                <div className={styles.beginBtn}>
                    开始验证
                </div>
                </NavLink>
            </div> 
        )
    }
}