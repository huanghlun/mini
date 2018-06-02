import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Launch.css';
import {fetchAPI, fetchPostAPI} from '../../api/util.js';

export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finish: false, //启动页是否完成
            name: "",
            password: ""
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        var that = this;
        setTimeout(() => { //2s后跳转启动页为登录页
            that.setState({
                finish: true 
            })
        }, 2000);
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
            if(res.code == 0)
                that.props.history.push('/index/'+res.data);
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.finish ?
                    (<div>
                        <img src={require('../../assets/images/launch.png')} 
                             style={{maxWidth: "100%", height: "auto", 
                                     position: "fixed", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}} />
                        <p style={{position: "fixed", bottom: "15px", color: "#8191A7", 
                                   width: "100%", textAlign: "center"}}>礼轻情意重</p>
                    </div> ) :
                    (
                        <div>
                            <div style={{width: "100%", marginTop: "153px", textAlign: "center"}}>
                                <img src={require('../../assets/images/login_logo.png')} style={{maxWidth: "100%", height: "auto"}} /> 
                            </div>
                            <div style={{width: "100%", marginTop: "110px", textAlign: "center"}}>
                                <div className={styles.loginMessageBox}>
                                    <input type="text" className={styles.loginEmail} placeholder="英文名" 
                                           value={this.state.name} onChange={this.onChangeName}/>
                                    <input type="text" className={styles.loginPassword} placeholder="密码" 
                                           value={this.state.password} onChange={this.onChangePassword}/>
                                </div>
                                <div className={styles.buttonBox}>
                                    <div className={styles.beginLogin} onClick={this.onLogin}>登录</div>
                                    <Link to="/register">
                                        <div className={styles.newUser}>新用户注册</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}