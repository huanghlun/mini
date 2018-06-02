import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Register.css';

export default class Register extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.registerOneBox}>
                <input type="text" className={styles.inputEmail} placeholder="企业邮箱地址" />
                <div className={styles.idCodeBox}>
                    <input type="text" placeholder="输入6位验证码" className={styles.idcode} />
                    <div className={styles.getIdCode}>发送验证码</div>
                </div>
                <NavLink to="/registerPassword">
                    <div className={styles.beginButton}>验证</div>
                </NavLink>
            </div> 
        )
    }
}