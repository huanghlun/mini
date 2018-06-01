import React, { Component } from 'react';
import IndexItem from './IndexItem/IndexItem.js';
import Selector from './Selector/Selector.js';
import { fetchPostAPI, fetchGetAPI } from '../../api/util.js';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //fetch taskList
        fetchGetAPI('getTaskListByType/', {
            taskType: 0
        }, function(res) {

        })
    }

    render() {
        var temp_prop = {
            type: 0,
            date: "6月27日",
            sex: 0,
            title: "王者荣耀",
            desc: "一起来玩王者农药吧！！！！！！"
        }
        return (
            <div className="content">
                <Selector />
                <IndexItem type={temp_prop.type} {...temp_prop}/>
                <IndexItem type={temp_prop.type} {...temp_prop}/>
                <IndexItem type={temp_prop.type} {...temp_prop}/>
            </div> 
        )
    }
}