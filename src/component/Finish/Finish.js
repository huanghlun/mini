import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Finish.css';
import { JOB_ICON, SEX_ICON } from '../Index/IndexItem/constant.js';
import { fetchGetAPI } from '../../api/util';

export default class Finish extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        var params = this.props.match.params,
            userId = params.userId,
            fulfillerId = params.fulfillerId,
            that = this;
        fetchGetAPI('getMyInfo/', {
            id: fulfillerId
        }, function(res) {
            if(res.code == 0) {
                that.setState({
                    user: res.data[0]
                })
            }
        })
    }

    render() {
        var params = this.props.match.params,
            userId = params.userId,
            fulfillerId = params.fulfillerId,
            user = this.state.user;
        console.log(user);
        return (
            <div className="content">
                <div className={styles.finishHead}>
                    <img src={require('../../assets/images/finish.png')} />
                    <p>已确认该任务完成</p>
                </div>
                <Link to={'/userMessage/'+user.gender+'/'+user.chinese_name+'/'+user.english_name+'/'+user.qq_no+'/'+user.tel_no}>
                <div className={"flex flex-align-center " + styles.ownSection}>
                    
                        <img style={{borderRadius: "50%", height:"64px", width:"64px", marginLeft:"27px"}} className="flex-none" 
                            src={user.gender ? require('../../assets/images/girl.jpg') : require('../../assets/images/boy.jpg')} />
                        <div className={"flex-1 " + styles.sectionName}>
                            <p>
                                <span>{user.chinese_name}</span><img src={SEX_ICON[user.gender]} className="sex-icon" />
                            </p>
                            <p style={{fontSize:"12px"}}>{user.english_name}</p>
                        </div>
                        <div className={"flex-none " + styles.sectionFooter}>
                            查看名片 >
                        </div>
                    
                </div>
                </Link>
                <div style={{textAlign: "center", marginTop:"15px", color: "#9B9B9B", fontSize: "13px"}}>
                    ta的名片已加入通讯录
                </div>

                <div>
                    <div className="bottom-button">
                        <Link to={'/index/'+userId}>
                            <div className={styles.button} >
                                查看其它任务
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}