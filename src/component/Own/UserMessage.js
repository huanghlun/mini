import React, {Component} from 'react';
import styles from './UserMessage.css';

export default class UserMessage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.top}>
                    <div className={styles.headImg} style={{backgroundImage:"url('http://placeholder.qiniudn.com/64x64')"}}></div>
                    <div className={styles.bottomBox}>
                        <div className={styles.username}>庄克</div>
                        <img className={styles.userSex} src={require("./img/female.png")} alt=""/>
                    </div>
                </div>
                <div className={styles.messageBody}>
                    <div className={styles.englishNameBox}>
                        <div>英文名</div>
                        <div>kellyzhuang</div>
                    </div>
                    <div className={styles.englishNameBox}>
                        <div>QQ号</div>
                        <div>8985029</div>
                    </div>
                    <div className={styles.englishNameBox+ " " +styles.unborder}>
                        <div>手机号</div>
                        <div>18811223947</div>
                    </div>
                </div>
            </div> 
        )
    }
}