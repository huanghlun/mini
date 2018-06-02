import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.css';
import { JOB_ICON, SEX_ICON, JOB_ICON_NOSELECT } from '../Index/IndexItem/constant.js';
import { fetchPostAPI } from '../../api/util';
import Modal from '../Modal/Modal.js';

export default class Finish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskTypeArr: [].concat(JOB_ICON_NOSELECT),
            taskType: 4,
            taskTitle: "",
            descriptionPub: "",
            descriptionSec: "",
            endTime: "", 
            show_modal: false
        }

        this.onSelectType = this.onSelectType.bind(this);
        this.onInputDescPub = this.onInputDescPub.bind(this);
        this.onInputDescSec = this.onInputDescSec.bind(this);
        this.onInputTitle = this.onInputTitle.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.showModal = this.showModal.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }

    onSelectType(index) {
        var arr = this.state.taskTypeArr;
        arr = [].concat(JOB_ICON_NOSELECT);
        arr[index] = JOB_ICON[index];

        this.setState({
            taskTypeArr: arr,
            taskType: index
        })
    }

    onInputTitle(event) {
        this.setState({
            taskTitle: event.target.value
        })
    }

    onInputDescPub(event) {
        this.setState({
            descriptionPub: event.target.value
        })
    }

    onInputDescSec(event) {
        this.setState({
            descriptionSec: event.target.value
        })
    }

    onChangeEndTime(event) {
        this.setState({
            endTime: event.target.value
        })
    }

    submitForm(){
        var that = this;
        fetchPostAPI('publishTask/', {
            releaseId: that.props.params.userId,
            taskType: that.state.taskType,
            taskTitle: that.state.taskTitle,
            descriptionPub: that.state.descriptionPub,
            descriptionSec: that.state.descriptionSec,
            endTime: that.state.endTime,
            taskPlace: ""
        }, function(res) {
            that.props.history.push('/index/'+that.props.params.userId);
        })
    }

    showModal() {
        this.setState({
            show_modal: true
        })
    }

    cancelHandler() {
        this.setState({
            show_modal: false
        })
    }

    render() {
        var taskTypeArr = this.state.taskTypeArr;
        return (
            <div>
            <div className="content">
                <div className={styles.section}>
                    <p>选择标签</p>
                    <div>
                        {taskTypeArr.map((val, index) => {
                            return (<img src={val} className="job-icon" style={{marginRight: "10px"}} key={index} 
                                         onClick={() => this.onSelectType(index)} />)
                        })}
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务标题</p>
                    <div>
                        <input type='text' placeholder='最多15字' maxLength='15' className={styles.input} 
                               value={this.state.taskTitle} onChange={this.onInputTitle}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务公开描述</p>
                    <div>
                        <textarea placeholder='所有人都可以看到这段描述' rows='5' className={styles.textarea} 
                                  value={this.state.descriptionPub} onChange={this.onInputDescPub} />
                    </div>
                </div>
                <div className={styles.section}>
                    <p>具体细节（仅接受任务者可见）</p>
                    <div>
                        <textarea placeholder='只有接受任务的人才知道的信息，如具体时间点、办公桌位置和其它你想让ta知道的信息' rows='5' className={styles.textarea} 
                                  value={this.state.descriptionSec} onChange={this.onInputDescSec} />
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务日期（可选今天至未来一周）</p>
                    <input type='date' style={{padding: "5px 10px", borderRadius: "5px", border: "1px solid rgba(151, 151, 151, 1)"}}
                           value={this.state.endTime} onChange={this.onChangeEndTime}/>
                </div>

                <div>
                    <div className="bottom-button"  style={{bottom: "10px"}}>
                        <div className={styles.button} onClick={this.showModal}>
                            填好了发布
                        </div>
                    </div>
                </div>
            </div>
            <Modal title={"是否确认发布？"} desc={"任务完成后完成者将得到积分×10，且双方名片可见"}
                cancelButton={"取消"} confirmButton={"确认"} show={this.state.show_modal}
                cancelHandler={this.cancelHandler} confirmHandler={this.submitForm}/>
            </div>
        )
    }
}