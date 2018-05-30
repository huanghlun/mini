import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { JOB_ICON, SEX_ICON } from '../Index/IndexItem/constant.js';
import styles from './Detail.css';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item : {}
        }
    }

    componentDidMount() {
        //fetch detail

        //setState
        this.setState({
            item: {
                title: "王者约不约",
                user: {
                    sex: 0
                },
                type: 0,
                postTime: "一天前发布",
                workTime: "2018-09-18",
                detail: "lalalallalalalalalalaalallalalalalalalalalalalalalalalalalalalalalalalalalalalalalalal",
                note: "约吗约吗约吗约吗约吗约吗",
                state: "已到完成时间，待确认完成"
            }
        })
    }

    render() {
        var item = this.state.item, sex = item.user ? item.user.sex : 0;
        // console.log(item.user.sex);
            // sex = item.user.sex;
        // console.log(item.user.sex);
        return (
            <div className="content">
                <div className={styles.section}>
                    <p className={styles.detailTitle}>{item.title}</p>
                    <p className="flex flex-align-center">
                        <img src={SEX_ICON[0]} className="sex_icon flex-none"/>
                        <span className="flex-1">{item.postTime}</span>
                    </p>
                    <p className="flex flex-align-center">
                        <img src={JOB_ICON[item.type]} className="job_icon flex-none"/>
                        <span className="flex-1">任务时间：{item.workTime}</span>
                    </p>
                </div>
                <div className={styles.section}>
                    <p className={styles.sectionTitle}>公开描述：</p>
                    <p className={styles.sectionDesc}>{item.detail}</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.sectionTitle}>ta想悄悄告诉你：</p>
                    <p className={styles.sectionDesc}>{item.note}</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.sectionTitle}>公开描述：</p>
                    <p className={styles.sectionDesc}>{item.state}</p>
                </div>
            </div>
        )
    }
}