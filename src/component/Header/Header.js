import React, {Component} from 'react';
import styles from './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var nav = this.props.match.params.nav,
            header = "";
        switch(nav) {
            case "own":
                header = "我的";
                break;
            case "detail":
                header = "任务详情";
                break;
            default:
                header = "任务认领";
                break;
        }
        return (
            <div className={styles.header}>
                {header}
            </div>
        )
    }
}