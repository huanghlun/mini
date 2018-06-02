import React, { Component } from 'react';
import IndexItem from '../Index/IndexItem/IndexItem.js';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';

export default class FinishTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: []
        }
        this.renderTaskList = this.renderTaskList.bind(this);
    }

    componentDidMount() {
        //fetch taskList
        var that = this,
            user_id = this.props.match.params.userId;
        fetchGetAPI('getMyTaskFulfilled/', {
            id: user_id
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