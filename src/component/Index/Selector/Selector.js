import React, {Component} from 'react';
import styles from './Selector.css'
import {JOB_ICON} from '../IndexItem/constant.js'

export default class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_type: false, //显示两个时间选择器
            show_time: false //显示两个时间选择器
        }

        this.onClickType = this.onClickType.bind(this);
        this.onClickTime = this.onClickTime.bind(this);
    }

    componentDidMount() {
        // var date = new Date();
        // this.setState({
        //     date: date
        // })
    }

    onClickType() {
        var show_type = this.state.show_type;
        this.setState({
            show_type: !show_type,
            show_time: false
        })
    }

    onClickTime() {
        var show_time = this.state.show_time;
        this.setState({
            show_time: !show_time,
            show_type: false
        })
    }

    render() {
        var show_type = this.state.show_type;
        var show_time = this.state.show_time;
        var onSelectType = this.props.onSelectType;
        var onSelectTime = this.props.onSelectTime;
        var date = new Date();
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
                            return <div key={index} onClick={() => {onSelectType(index); that.setState({show_type: false})}}>
                                <img src={val} className="job-icon"/>
                            </div>
                        })}
                        <div onClick={() => {
                            onSelectType(4); 
                            that.setState({show_type: false})
                        }} >全部类别</div>
                </div>
                <div className={styles.selectTimePanel + " " + (show_time ? styles.selectedPanel : "")}>
                    {
                        [date, new Date(date.getTime()+24*60*60*1000), new Date(date.getTime()+48*60*60*1000), new Date(date.getTime()+72*60*60*1000)].map((val, index) => {
                            var time = val.getFullYear()+"-"+(val.getMonth()+1)+"-"+val.getDate();
                            return (<div onClick={() => {onSelectTime(time); that.setState({show_time: false})}} key={index}>
                                {time}
                            </div>)
                        })
                    }
                    <div onClick={() => {
                        onSelectType(4); 
                        that.setState({show_time: false});
                        }} >
                        全部时间
                    </div>
                </div>
            </div>
        )
    }
}