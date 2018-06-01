import React, {Component} from 'react';
import styles from './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    onClickBack() {
        console.log(history);
        history.go(-1);
    }

    render() {
        var nav = this.props.match.params.nav,
            header = "",
            navigateBack = false; //是否出现回退按钮
        switch(nav) {
            case "own":
                header = "我的";
                break;
            case "detail":
                header = "任务详情";
                navigateBack = true;
                break;
            case "userMessage":
                header = "信息";
                navigateBack = true;
                break;
            case "addressList":
                header = "通讯录";
                navigateBack = true;
                break;
            default:
                header = "任务认领";
                break;
        }
        if(nav == 'own') {
            return <div></div>
        }
        return (
            <div className={styles.header}>
                {navigateBack ? <img src={require('../../assets/images/back.png')} 
                                     style={{maxWidth: '100%', height: 'auto', position: 'absolute', left: '23px', top: '12px'}}
                                     onClick={this.onClickBack} /> : ""}
                {header}
            </div>
        )
    }
}