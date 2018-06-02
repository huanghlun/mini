import React, {Component} from 'react';
import styles from './Selector.css'
import {JOB_ICON} from '../IndexItem/constant.js'

export default class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_type: false, //显示两个时间选择器
            show_time: false, //显示两个时间选择器
        }

        this.onClickType = this.onClickType.bind(this);
        this.onClickTime = this.onClickTime.bind(this);
    }

    onClickType() {
        var show_type = this.state.show_type;
        this.setState({
            show_type: !show_type
        })
    }

    onClickTime() {
        var show_time = this.state.show_time;
        this.setState({
            show_time: !show_time
        })
    }

    render() {
        var show_type = this.state.show_type;
        var show_time = this.state.show_time;
        var onSelectType = this.props.onSelectType;
        var that = this;
        return (
            <div style={{position: "relative"}}>
                <div className={"flex flex-align-center " + styles.selectorContainer}>
                    <div className="flex-1" onClick={this.onClickType}>
                        <p className={styles.selector}>类型</p>
                    </div>
                    <div className="flex-1" onClick={this.onClickTime}>
                        <p className={styles.selector}>日期</p>
                    </div>
                </div>
                <div className={styles.selectPanel + " " + (show_type ? styles.selectedPanel : "")}>
                        {JOB_ICON.map(function(val, index) {
                            return <div key={index} onClick={() => {onSelectType(index)}}>
                                <img src={val} className="job-icon"/>
                            </div>
                        })}
                </div>
                <div className={styles.selectTimePanel + " " + (show_time ? styles.selectedPanel : "")}>
                    {/* <ul>
                        <li><img src="./images/yule-selected.png" className="job-icon"/></li>
                        <li><img src="./images/pinche-selected.png" className="job-icon"/></li>
                        <li><img src="./images/bangmang-selected.png" className="job-icon"/></li>
                        <li><img src="./images/yuefan-selected.png" className="job-icon"/></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}