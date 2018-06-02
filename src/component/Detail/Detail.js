import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { JOB_ICON, SEX_ICON } from '../Index/IndexItem/constant.js';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';
import styles from './Detail.css';
import Modal from '../Modal/Modal.js';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item : {},
            show_modal: false
        }

        this.onClickConfirm = this.onClickConfirm.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.confirmHandler = this.confirmHandler.bind(this);
    }

    componentDidMount() {
        //fetch detail
        var taskId = this.props.location.search.split('?')[1];
        var that = this;
        fetchGetAPI('getTaskDetail/', {
            taskId: taskId
        }, function(res) {
            if(res.data.length > 0) {
                that.setState({
                    item: res.data[0]
                })
            }
        })
    }

    componentDidUpdate() {
        if((JSON.stringify(this.state.item) == "{}") {
            var taskId = this.props.location.search.split('?')[1];
            var that = this;
            fetchGetAPI('getTaskDetail/', {
                taskId: taskId
            }, function(res) {
                if(res.data.length > 0) {
                    that.setState({
                        item: res.data[0]
                    })
                }
            })
        }
    }

    onClickConfirm() {
        this.setState({
            show_modal: true
        })
    }

    cancelHandler(){
        this.setState({
            show_modal: false
        })
    }

    confirmHandler(){
        this.setState({
            show_modal: false
        })
        // history.pushState()
        this.props.history.push('/receive/' + this.state.item.id + '/' + this.state.item.description_sec)
    }

    render() {
        var item = this.state.item;
        console.log(item);

        return (
            <div>
                <div className="content">
                    <div className={styles.section}>
                        <p className={styles.detailTitle}>{item.task_title}</p>
                        <p className="flex flex-align-center">
                            <img src={SEX_ICON[item.gender]} className="sex_icon flex-none"/>
                            <span className="flex-1">{item.release_time}</span>
                        </p>
                        <p className="flex flex-align-center">
                            <img src={JOB_ICON[item.task_type]} className="job_icon flex-none"/>
                            <span className="flex-1">任务时间：{item.demand_time}</span>
                        </p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>公开描述：</p>
                        <p className={styles.sectionDesc}>{item.description_pub}</p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>ta想悄悄告诉你：</p>
                        <p className={styles.sectionDesc}>{item.description_sec}</p>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>状态：</p>
                        <p className={styles.sectionDesc}>{item.state}</p>
                    </div>

                    {!item.fufiller_id ? (<div>
                        <div className="bottom-button">
                            {/* <Link to={'/receive/' + item.note + '/' + item.workTime}> */}
                                <div className={styles.button} onClick={this.onClickConfirm}>
                                    就是你了！接受任务
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>) : ""}
                </div>
                <Modal title={"确定接受这个任务了吗？"} desc={"任务完成后完成者将得到积分×10，且双方名片可见"}
                cancelButton={"再想想"} confirmButton={"准备好了！"} show={this.state.show_modal}
                cancelHandler={this.cancelHandler} confirmHandler={this.confirmHandler}/>
            </div>
        )
    }
}