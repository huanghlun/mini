import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Launch.css';

export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finish: false //启动页是否完成
        }
    }

    componentDidMount() {
        console.log("here");
        var that = this;
        setTimeout(() => { //2s后跳转启动页为登录页
            that.setState({
                finish: true 
            })
        }, 2000);
    }

    render() {
        return (
            <div className="page-container">
                {
                    !this.state.finish ?
                    <img src={require('../../assets/images/begin.png')} style={{width: "100%", height: "100%"}} /> :
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