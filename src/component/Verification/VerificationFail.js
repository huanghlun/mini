import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './VerificationFail.css';

export default class Verification extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.verificationFailBox}>
               <div className={styles.messageBox}>
                    <img src={require("./img/unsuccessful.png")} alt="" className={styles.unsuccessful} />
                    <div className={styles.title1}>啊哦…认证失败</div>
                    <div className={styles.title2}>请检查英文名和工号是否正确</div>
               </div>
               <div className={styles.gotoBtn}>
                    重新认证
               </div>
            </div> 
        )
    }
}