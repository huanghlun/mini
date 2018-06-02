import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AddressList.css';
import { fetchGetAPI } from '../../api/util';

export default class AddressList extends Component {
    constructor(props){
        super(props);

        this.state = {
            helper: []
        }
    }

    componentDidMount() {
        var user_id = this.props.match.params.userId,
            that = this;
        fetchGetAPI('getMyHelper/', {
            id: user_id
        }, function(res) {
            that.setState({
                helper: res.data
            })
        })
    }

    render() {
        return (
            <div className={styles.addBox}>
                <ul>
                    {
                        this.state.helper.map((val, index) => {
                            return (
                                <li key={index}>
                                    <div className={styles.userImg} style={{backgroundImage:"url('http://placeholder.qiniudn.com/64x64')"}}></div>
                                    <div className={styles.userMsgBox}>
                                        <div className={styles.userName}>{val.chinese_name}</div>
                                        <img className={styles.userSex} src={require("./img/female.png")}></img>
                                        <div className={styles.userWrite}>{val.english_name}</div>
                                    </div>
                                    <div className={styles.goto}>
                                        查看名片 >
                                    </div>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div> 
        )
    }
}