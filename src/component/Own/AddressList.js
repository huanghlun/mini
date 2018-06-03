import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
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
                                <Link key={index} to={'/userMessage/'+val.gender+'/'+val.chinese_name+'/'+val.english_name+'/'+val.qq_no+'/'+val.tel_no}>
                                    <li>
                                        {val.gender ? <div className={styles.userImg} ></div> :
                                        <div className={styles.userImgBoy} ></div>}
                                        <div className={styles.userMsgBox}>
                                                <div className={styles.userName}>{val.chinese_name}</div>
                                                <img className={styles.userSex} src={val.gender ? require("./img/female.png") : require("../../assets/images/male.png")}></img>
                                                <div className={styles.userWrite}>{val.english_name}</div>
                                        </div>
                                        <div className={styles.goto}>
                                            查看名片 >
                                        </div>
                                    </li> 
                                </Link>
                            )
                        })
                    }
                </ul>
            </div> 
        )
    }
}