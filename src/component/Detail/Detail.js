import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { JOB_ICON, SEX_ICON, JOB_STATUS } from '../Index/IndexItem/constant.js';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';
import styles from './Detail.css';
import Modal from '../Modal/Modal.js';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item : {},
            show_modal: false,
            modalTitle: "",
            modalDesc: "",
            clickConfirm: new Function()
        }

        this.onClickConfirm = this.onClickConfirm.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.confirmHandler = this.confirmHandler.bind(this);
        this.onClickFinish = this.onClickFinish.bind(this);
    }

    componentDidMount() {
        //fetch detail
        var taskId = this.props.match.params.itemId;
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
        if(JSON.stringify(this.state.item) == "{}") {
            var taskId = this.props.match.params.itemId;;
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
        var item = this.state.item.releaser_id,
            userId = this.props.match.params.userId;
        if(item == userId) {
            this.setState({
                show_modal: true,
                modalTitle: "接受任务失败",
                modalDesc: "不能接受自己发布的任务",
                cancel_button: "取消",
                confirm_button: "确定",
                clickConfirm: this.cancelHandler.bind(this)
            })
        } else {
            this.setState({
                show_modal: true,
                modalTitle: "确定接受这个任务了吗？",
                modalDesc: "任务完成后完成者将得到积分×10，且双方名片可见",
                cancel_button: "再想想",
                confirm_button: "准备好了！",
                clickConfirm: this.confirmHandler.bind(this)
            })
        }
    }

    onClickFinish() {
        this.setState({
            show_modal: true,
            modalTitle: "是否确认该任务已完成？",
            modalDesc: "确认后双方名片可见",
            cancel_button: "取消",
            confirm_button: "确定",
            clickConfirm: this.finishHandler.bind(this)
        })
    }

    cancelHandler(){
        this.setState({
            show_modal: false
        })
    }

    confirmHandler(){
        var that = this;
        // history.pushState()
        fetchPostAPI('receiveTask/', {
            fulfillerId: this.props.match.params.userId,
            taskId: this.state.item.id
        }, function(res){
            that.setState({
                show_modal: false
            })
            if(res.code == 0)
                that.props.history.push('/receive/' + that.state.item.description_sec + '/' + that.state.item.demand_time)
        })
    }

    finishHandler() {
        var that = this;
        // history.pushState()
        fetchPostAPI('finishTask/', {
            fulfillerId: this.state.item.fufiller_id,
            taskId: this.state.item.id
        }, function(res){
            that.setState({
                show_modal: false
            })
            if(res.code == 0)
                that.props.history.push('/finish/' + that.props.match.params.userId + '/' + that.state.item.fufiller_id)
        })
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
                            <span className="flex-1">{item.release_time ? (item.release_time.split('T')[0]) : ""}</span>
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
                    {item.fufiller_id && item.fufiller_id == this.props.match.params.userId ? 
                        (<div className={styles.section}>
                            <p className={styles.sectionTitle}>ta想悄悄告诉你：</p>
                            <p className={styles.sectionDesc}>{item.description_sec}</p>
                        </div>) : ""}
                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>状态：</p>
                        <p className={styles.sectionDesc}>{JOB_STATUS[item.status]}</p>
                    </div>

                    {!item.fufiller_id ? (<div>
                        <div className="bottom-button">
                            {/* <Link to={'/receive/' + item.note + '/' + item.workTime}> */}
                                <div className={styles.button} onClick={this.onClickConfirm}>
                                    就是你了！接受任务
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>) : (item.releaser_id == this.props.match.params.userId ?  
                        (<div className="bottom-button">
                        {/* <Link to={'/receive/' + item.note + '/' + item.workTime}> */}
                            <div className={styles.button} onClick={this.onClickFinish}>
                                确认任务完成
                            </div>
                        {/* </Link> */}
                    </div>) : "")}
                </div>
                <Modal title={this.state.modalTitle} desc={this.state.modalDesc}
                cancelButton={this.state.cancel_button} confirmButton={this.state.confirm_button} show={this.state.show_modal}
                cancelHandler={this.cancelHandler} confirmHandler={this.state.clickConfirm}/>
            </div>
        )
    }
}