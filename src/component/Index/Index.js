import React, {Component} from 'react';
import IndexItem from './IndexItem/IndexItem.js';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var temp_prop = {
            type: 0,
            date: "6月27",
            sex: 0,
            title: "王者荣耀",
            desc: "一起来玩王者农药吧！！！！！！"
        }
        return (
            <div className="content">
                <IndexItem type={temp_prop.type} date={temp_prop.date} sex={temp_prop.sex} title={temp_prop.title} desc={temp_prop.desc}/>
            </div> 
        )
    }
}