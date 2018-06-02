import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Register.css';
import Modal from '../Modal/Modal.js';
import { fetchPostAPI } from '../../api/util';

export default class Register extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            workNo: "",
            gender: "",
            englishName: "",
            passWord: "",
            confirmPassword: "",
            show_modal: false
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWorkNo = this.onChangeWorkNo.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }

    onChangeName(event) {
        this.setState({
            englishName: event.target.value
        })
    }

    onChangeWorkNo(event) {
        this.setState({
            workNo: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            passWord: event.target.value
        })
    }
    onChangeConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    isValid(){
        if(this.state.workNo && this.state.englishName &&
           this.state.passWord && this.state.confirmPassword &&
           this.state.passWord == this.state.confirmPassword) {
            return true;
        }
        return false;
    }

    onSubmit(){
        if(this.isValid()) {
            fetchPostAPI('register/', {
                workNo: this.state.workNo,
                englishName: this.state.englishName,
                passWord: this.state.englishName
            }, function(res) {
                if(res.code == 0) {
                    this.props.history.push('/index/' + res.data);
                }
            })
        } else {
            this.setState({
                show_modal: true
            })
        }
    }

    cancelHandler() {
        this.setState({
            show_modal: false
        })
    }

    render() {
        return (
            <div>
                <div className={styles.registerOneBox}>
                    <input type="text" className={styles.inputEmail} placeholder="英文名" 
                        value={this.state.englishName} onChange={this.onChangeName}/>
                    <input type="text" placeholder="工卡号" className={styles.inputEmail + " " + styles.card} 
                        value={this.state.workNo} onChange={this.onChangeWorkNo} />
                    <input type="text" placeholder="设置密码（6位以上）" className={styles.inputEmail + " " + styles.password} 
                        value={this.state.password} onChange={this.onChangePassword} />
                    <input type="text" placeholder="确认密码" className={styles.inputEmail + " " + styles.password} 
                        value={this.state.password} onChange={this.onChangeConfirmPassword} />
                    <div className={styles.beginButton} onClick={this.onSubmit}>认证并注册</div>
                </div> 
                <Modal title={"注册失败"} desc={"输入字段不能为空且两次密码输入需一致"}
                cancelButton={"取消"} confirmButton={"重新输入"} show={this.state.show_modal}
                cancelHandler={this.cancelHandler} confirmHandler={this.cancelHandler}/>
            </div>
        )
    }
}