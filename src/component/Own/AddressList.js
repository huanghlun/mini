import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AddressList.css';

export default class Own extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.addBox}>
                <ul>
                    <li>
                        <div className={styles.userImg} style={{backgroundImage:"url('http://placeholder.qiniudn.com/64x64')"}}></div>
                        <div className={styles.userMsgBox}>
                            <div className={styles.userName}>刘登超</div>
                            <img className={styles.userSex} src={require("./img/female.png")}></img>
                            <div className={styles.userWrite}>This is me</div>
                        </div>
                        <div className={styles.goto}>
                            查看名片 >
                        </div>
                    </li>
                </ul>
            </div> 
        )
    }
}