import React, {Component} from 'react';
import { Link,NavLink } from 'react-router-dom';
import styles from './Launch.css';
import {fetchAPI} from '../../api/util.js';

export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finish: false //启动页是否完成
        }
    }

    componentDidMount() {
        var that = this;
        setTimeout(() => { //2s后跳转启动页为登录页
            that.setState({
                finish: true 
            })
        }, 2000);
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
                                {/* 点击登录直接跳转，之后要加入qq第三方登录 */}
                                <div className={styles.loginMessageBox}>
                                    <input type="text" className={styles.loginEmail} placeholder="企业邮箱地址" />
                                    <input type="text" className={styles.loginPassword} placeholder="密码" />
                                </div>
                                <div className={styles.buttonBox}>
                                    <div className={styles.beginLogin}>登录</div>
                                    <NavLink to="/register">
                                        <div className={styles.newUser}>新用户注册</div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}