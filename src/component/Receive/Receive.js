import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Receive.css';

export default class Receive extends Component {
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
                <div className={styles.receiveHead}>
                    <img src={require('../../assets/images/finish.png')} />
                    <p>任务接受成功</p>
                </div>
                <div className={styles.receiveDesc}>
                    <p>ta想悄悄告诉你：</p>
                    <p>{note}</p>
                </div>
                <div className={styles.receiveFooter}>
                    别忘了在{workTime}）完成任务哦！
                </div>

                <div>
                    <div className="bottom-button">
                        <div className={styles.button} onClick={() => {history.go(-1)}} >
                            查看任务
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}