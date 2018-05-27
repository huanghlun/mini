import React, {Component} from 'react';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                {this.props.page == 0 ? "Page1——Hello World!" : "Page2——Hello React!" }
            </div> 
        )
    }
}