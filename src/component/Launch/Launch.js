import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
        // fetchAPI('receiveTask/', {
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/x-www-form-urlencoded"
        //     },
        //     body: "fulfillerId=1&taskId=1",
        //     mode: 'cors'
        // })

        fetchAPI('getMyHelper/?id=1')


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
                                <Link to='/index'>
                                    <div className={styles.button}>
                                        <img src={require('../../assets/images/qq.png')} style={{maxWidth: "100%", height: "auto", verticalAlign: "middle"}} /> 
                                        <span>QQ登录</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}