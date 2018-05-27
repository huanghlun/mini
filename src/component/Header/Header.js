import React, {Component} from 'react';
import styles from './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                {this.props.match.params.nav == "own" ? "我的" : "任务认领"}
            </div>
        )
    }
}