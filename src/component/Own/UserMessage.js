import React, {Component} from 'react';
import styles from './UserMessage.css';

export default class UserMessage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var params = this.props.match.params,
            user = {
                gender: parseInt(params.gender),
                chinese_name: params.name,
                english_name: params.englishName,
                qq_no: params.qqNo,
                tel_no:params.telNo
            }
            console.log(user);
        return (
            <div>
                <div className={styles.box}>
                    <div className={styles.top}>
                        {/* <div className={styles.headImg} style={{backgroundImage:"url('http://placeholder.qiniudn.com/64x64')"}}></div> */}
                        {user.gender ? <div className={styles.headImg}></div>
                                : <div className={styles.headImg + " " + styles.boyImg}></div>}
                        <div className={styles.bottomBox}>
                            <div className={styles.username}>{user.chinese_name}</div>
                            <img className={styles.userSex} src={user.gender ? require("./img/female.png") : require("../../assets/images/male.png")} alt=""/>
                        </div>
                    </div>
                    <div className={styles.messageBody}>
                        <div className={styles.englishNameBox}>
                            <div>英文名</div>
                            <div>{user.english_name}</div>
                        </div>
                        <div className={styles.englishNameBox}>
                            <div>QQ号</div>
                            <div>{user.qq_no}</div>
                        </div>
                        <div className={styles.englishNameBox+ " " +styles.unborder}>
                            <div>手机号</div>
                            <div>{user.tel_no}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.mask}></div> 
            </div>
        )
    }
}