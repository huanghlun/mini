import React, {Component} from 'react';
import TabItem from './TabItem.js';
import {NavLink} from 'react-router-dom';
import styles from './Tab.css';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        var path = this.props.match.params["0"],
            user_id = this.props.match.params.userId; //获取导航路径名称
        console.log(this.props);
        return (
            <div className={"flex flex-align-center " + styles.tab}>
                <TabItem page={0} active={path != "own"}>
                    <NavLink to={"/index/"+user_id}>
                        {path == "own" ? <img src={require("../../assets/images/post-it.png")} style={{height:"32px", width: "32px"}} />
                        : <img src={require("../../assets/images/post-it-selected.png")} style={{height:"32px", width: "32px"}} />}
                    </NavLink>
                </TabItem>
                <TabItem page={1}>
                    <NavLink to={"/post/"+user_id}>
                        <img src={require("../../assets/images/add.png")} style={{height:"54px", width: "54px"}} />
                    </NavLink>
                </TabItem>
                <TabItem page={2} active={path == "own"}>
                    <NavLink to={"/own/"+user_id} >
                        {path != "own" ? (<img src={require("../../assets/images/user.png")} style={{height:"32px", width: "32px"}} />)
                        : (<img src={require("../../assets/images/user-selected.png")} style={{height:"32px", width: "32px"}} />) }
                    </NavLink>
                </TabItem>
            </div>
        )
    }
}