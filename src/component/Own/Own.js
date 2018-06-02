import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';
import { SEX_ICON, SEX_AVATAR } from '../Index/IndexItem/constant.js';
import styles from './Own.css';

export default class Own extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }

        this.getUserInfo = this.getUserInfo.bind(this)
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        var that = this,
            user_id = this.props.match.params.userId;
        fetchGetAPI('getMyInfo/', {
            id: user_id
        }, function(res) {
            if(res.data.length > 0) {
                that.setState({
                    user: res.data[0]
                })
            }
        })
    }



    render() {
        var user = this.state.user,
            user_id = this.props.match.params.userId;
        return (
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.userMessageBox}>
                            {user.gender ? <div className={styles.headImg}></div>
                            : <div className={styles.headImg + " " + styles.boyImg}></div>}
                        <div className={styles.userMessage}>
                            <div className={styles.userName}>{user.chinese_name}</div>
                            <img className={styles.userSex} src={SEX_ICON[user.gender]} />
                            <div className={styles.userWrite}>{user.english_name}</div>
                        </div>
                    </div>
                    <div className={styles.additionalMessageBox}>
                        {/* <div>积分：97</div>
                        <div className={styles.space}>|</div>
                        <div>排名：239</div> */}
                    </div>
                </div>
                
                <div className={styles.taskBox}>
                    <div className={styles.title}>
                       <b>我的任务</b> 
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.iconBox}>
                        <div className={styles.toCompletedBox}>
                            <Link to={"/toFinishTask/"+user_id}>
                                <div className={styles.toCompletedIcon}></div>
                                <div className={styles.toCompletedTitle}>待完成</div>
                            </Link>
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.overCompletedBox}>
                            <Link to={"/finishTask/"+user_id}>
                                <div className={styles.overCompletedIcon}></div>
                                <div className={styles.overCompletedTitle}>已完成</div>
                            </Link>
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.releaseBox}>
                            <Link to={"/publishTask/"+user_id}>
                                <div className={styles.releaseIcon}></div>
                                <div className={styles.releaseTitle}>已发布</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.linkBox}>
                    <Link to={"/addressList/"+user_id}>
                        <div className={styles.addressListBox}>
                            <div className={styles.addressListIcon}></div>
                            <div className={styles.addressListTitle}>通讯录</div>
                            <div className={styles.addressListGo}></div>
                        </div>
                    </Link>
                    <Link to={"/userMessage/"+user.gender+'/'+user.chinese_name+'/'+user.english_name+'/'+user.qq_no+'/'+user.tel_no}>
                        <div className={styles.userCardBox}>
                            <div className={styles.userCardIcon}></div>
                            <div className={styles.userCardTitle}>我的名片</div>
                            <div className={styles.userCardListGo}></div>
                        </div>
                    </Link>
                </div>
                
                <Link to='/'>
                    <div className={styles.logout}>
                        退出登录
                    </div>
                </Link>
            </div> 
        )
    }
}