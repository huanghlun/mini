import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './RegisterPassword.css';

export default class RegisterPassword extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.registerOneBox}>
                <input type="text" className={styles.inputEmail} placeholder="设置密码（6位以上）" />
                <div className={styles.idCodeBox}>
                    <input type="text" placeholder="确认密码" className={styles.idcode} />
                </div>
                <div className={styles.beginButton}>注册</div>
            </div> 
        )
    }
}