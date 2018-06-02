import React, { Component } from 'react';
import IndexItem from './IndexItem/IndexItem.js';
import Selector from './Selector/Selector.js';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';
import { timingSafeEqual } from 'crypto';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: []
        }

        this.selectType = this.selectType.bind(this);
        this.renderTaskList = this.renderTaskList.bind(this);
    }

    componentDidMount() {
        //fetch taskList
        var that = this;
        fetchGetAPI('getTaskListByType/', {
            taskType: 4
        }, function(res) {
            that.renderTaskList(res.data);
        })
    }

    selectType(type) {
        var that = this;
        fetchGetAPI('getTaskListByType/', {
            taskType: type
        }, function(res) {
            that.renderTaskList(res.data);
        })
    }

    renderTaskList(taskList) {
        console.log(taskList);
        this.setState({
            taskList: taskList
        })
    }

    render() {
        var list = this.state.taskList;
        return (
            <div className="content">
                <Selector onSelectType={this.selectType}/>
                {
                    list.map((item, index) => {
                        return (
                            <IndexItem key={index} {...item} />
                        )
                    })
                }
            </div> 
        )
    }
}