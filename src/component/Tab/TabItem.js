import React, {Component} from 'react';
import styles from './Tab.css';

export default class TabItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className={"flex-1 " + styles.tabItem + " " + (this.props.active ? styles.activeTabItem : "")}>
                {this.props.children}
                <div className={styles.tabItemText}>
                    {this.props.page == 0 ? "任务认领" : this.props.page == 2 ? "我的" : ""}
                </div>
            </div>
        )
    }
}