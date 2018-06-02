import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Own.css';

export default class Own extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.userMessageBox}>
                        <NavLink to="/verification">
                            <div className={styles.headImg} style={{backgroundImage:"url('http://placeholder.qiniudn.com/46x46')"}}></div>
                        </NavLink>
                        <div className={styles.userMessage}>
                            <div className={styles.userName}>庄克</div>
                            <img className={styles.userSex} src={require("./img/female.png")} alt=""/>
                            <div className={styles.userWrite}>This is me</div>
                        </div>
                    </div>
                    <div className={styles.additionalMessageBox}>
                        <div>积分：97</div>
                        <div className={styles.space}>|</div>
                        <div>排名：239</div>
                    </div>
                </div>
                
                <div className={styles.taskBox}>
                    <div className={styles.title}>
                       <b>我的任务</b> 
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.iconBox}>
                        <div className={styles.toCompletedBox}>
                            <div className={styles.numberIcon}>12</div>
                            <div className={styles.toCompletedIcon}></div>
                            <div className={styles.toCompletedTitle}>待完成</div>
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.overCompletedBox}>
                            <div className={styles.overCompletedIcon}></div>
                            <div className={styles.overCompletedTitle}>已完成</div>
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.releaseBox}>
                            <div className={styles.numberIcon}>2</div>
                            <div className={styles.releaseIcon}></div>
                            <div className={styles.releaseTitle}>已发布</div>
                        </div>
                    </div>
                </div>

                <div className={styles.linkBox}>
                    <NavLink to="/addressList">
                        <div className={styles.addressListBox}>
                            <div className={styles.addressListIcon}></div>
                            <div className={styles.addressListTitle}>通讯录</div>
                            <div className={styles.addressListGo}></div>
                        </div>
                    </NavLink>
                    <NavLink to="/userMessage">
                        <div className={styles.userCardBox}>
                            <div className={styles.userCardIcon}></div>
                            <div className={styles.userCardTitle}>我的名片</div>
                            <div className={styles.userCardListGo}></div>
                        </div>
                    </NavLink>
                </div>

                <div className={styles.logout}>
                    退出登录
                </div>

            </div> 
        )
    }
}