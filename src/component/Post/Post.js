import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.css';
import { JOB_ICON, SEX_ICON, JOB_ICON_NOSELECT } from '../Index/IndexItem/constant.js';

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
                <div className={styles.section}>
                    <p>选择标签</p>
                    <div>
                        {JOB_ICON_NOSELECT.map((val, index) => {
                            return (<img src={val} className="job-icon" style={{marginRight: "10px"}} key={index}/>)
                        })}
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务标题</p>
                    <div>
                        <input type='text' placeholder='最多15字' maxLength='15' className={styles.input} />
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务公开描述</p>
                    <div>
                        <textarea placeholder='所有人都可以看到这段描述' rows='5' className={styles.textarea} />
                    </div>
                </div>
                <div className={styles.section}>
                    <p>具体细节（仅接受任务者可见）</p>
                    <div>
                        <textarea placeholder='只有接受任务的人才知道的信息，如具体时间点、办公桌位置和其它你想让ta知道的信息' rows='5' className={styles.textarea} />
                    </div>
                </div>
                <div className={styles.section}>
                    <p>任务日期（可选今天至未来一周）</p>
                    <input type='date' style={{padding: "5px 10px", borderRadius: "5px", border: "1px solid rgba(151, 151, 151, 1)"}}/>
                </div>

                <div>
                    <div className="bottom-button"  style={{bottom: "10px"}}>
                        <div className={styles.button}>
                            填好了发布
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}