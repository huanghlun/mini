import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Launch.css';
import Modal from '../Modal/Modal.js';
import {fetchAPI, fetchPostAPI} from '../../api/util.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            password: "",
            show_modal: false
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }

    onChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onLogin() {
        var that = this;
        fetchPostAPI('login/', {
            englishName:this.state.name,
            passWord: this.state.password
        }, function(res) {
            if(res.code == 0) {
                if(localStorage) {
                    localStorage.setItem('userId', res.data);
                }
                that.props.history.push('/index/'+res.data);
            } else {
                that.setState({
                    show_modal: true
                })
            }
        })
    }

    cancelHandler() {
        this.setState({
            show_modal: false
        })
    }

    render() {
        return (
            <div>
                <div style={{width: "100%", marginTop: "153px", textAlign: "center"}}>
                    <img src={require('../../assets/images/login_logo.png')} style={{maxWidth: "100%", height: "auto"}} /> 
                </div>
                <div style={{width: "100%", marginTop: "110px", textAlign: "center"}}>
                    <div className={styles.loginMessageBox}>
                        <input type="text" className={styles.loginEmail} placeholder="英文名" 
                                value={this.state.name} onChange={this.onChangeName}/>
                        <input type="password" className={styles.loginPassword} placeholder="密码" 
                                value={this.state.password} onChange={this.onChangePassword}/>
                    </div>
                    <div className={styles.buttonBox}>
                        <div className={styles.beginLogin} onClick={this.onLogin}>登录</div>
                        <Link to="/register">
                            <div className={styles.newUser}>新用户注册</div>
                        </Link>
                    </div>
                </div>

                <Modal title={"登录失败"} desc={"用户不存在，或英文名及密码输入不正确"}
                cancelButton={"取消"} confirmButton={"确认"} show={this.state.show_modal}
                cancelHandler={this.cancelHandler} confirmHandler={this.cancelHandler}/>
            </div>
        )
    }
}