import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Launch.css';
import {fetchAPI, fetchPostAPI} from '../../api/util.js';

export default class Launch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var that = this;
        if(localStorage && localStorage.getItem('userId')) {
            var userId = localStorage.getItem('userId');
            that.props.history.push('/index/'+userId);
        } else{
            that.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <div>
                    <img src={require('../../assets/images/launch.png')} 
                            style={{maxWidth: "100%", height: "auto", 
                                    position: "fixed", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}} />
                    <p style={{position: "fixed", bottom: "15px", color: "#8191A7", 
                                width: "100%", textAlign: "center"}}>礼轻情意重</p>
                </div>
            </div>
        )
    }
}