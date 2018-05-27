import React, {Component} from 'react';
import TabItem from './TabItem.js';
import {NavLink} from 'react-router-dom';
import styles from './Tab.css';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        var nav = this.props.match.params.nav; //获取导航路径名称
        return (
            <div className={"flex flex-align-center " + styles.tab}>
                <TabItem page={0} active={nav != "own"}>
                    <NavLink to="/index">
                        {nav == "own" ? <img src={require("../../assets/images/post-it.png")} style={{height:"32px", width: "32px"}} />
                        : <img src={require("../../assets/images/post-it-selected.png")} style={{height:"32px", width: "32px"}} />}
                    </NavLink>
                </TabItem>
                <TabItem page={1}>
                    <NavLink to="/post">
                        <img src={require("../../assets/images/add.png")} style={{height:"54px", width: "54px"}} />
                    </NavLink>
                </TabItem>
                <TabItem page={2} active={nav == "own"}>
                    <NavLink to="/own" >
                        {nav != "own" ? (<img src={require("../../assets/images/user.png")} style={{height:"32px", width: "32px"}} />)
                        : (<img src={require("../../assets/images/user-selected.png")} style={{height:"32px", width: "32px"}} />) }
                    </NavLink>
                </TabItem>
            </div>
        )
    }
}