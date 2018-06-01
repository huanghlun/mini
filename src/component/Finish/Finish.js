import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Finish.css';
import { JOB_ICON, SEX_ICON } from '../Index/IndexItem/constant.js';

export default class Finish extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        var params = this.props.match.params,
            note = params.note,
            workTime = params.workTime;
        return (
            <div className="content">
                <div className={styles.finishHead}>
                    <img src={require('../../assets/images/finish.png')} />
                    <p>已确认该任务完成</p>
                </div>
                <div className={"flex flex-align-center " + styles.ownSection}>
                    <img style={{background: "rgba(100, 100, 100, 0.5)", borderRadius: "50%", height:"64px", width:"64px", marginLeft:"27px"}} className="flex-none" />
                    <div className={"flex-1 " + styles.sectionName}>
                        <p>
                            <span>刘登超</span><img src={SEX_ICON[1]} className="sex-icon" />
                        </p>
                        <p style={{fontSize:"12px"}}>dengchaoliu </p>
                    </div>
                    <div className={"flex-none " + styles.sectionFooter}>
                        查看名片 >
                    </div>
                </div>
                <div style={{textAlign: "center", marginTop:"15px", color: "#9B9B9B", fontSize: "13px"}}>
                    ta的名片已加入通讯录
                </div>

                <div>
                    <div className="bottom-button">
                        <Link to='/index'>
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