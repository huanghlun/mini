import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tab from './Tab/Tab.js';
import Header from './Header/Header.js';
import Index from './Index/Index.js';
import Own from './Own/Own.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        this.setState({
            page: page
        })
    }

    render() {
        
        return (
            <BrowserRouter>
                <div>
                    <Route path='/:nav?' component={Header} />
                    <Switch>
                        <Route path='/own' component={Own} />
                        <Route path='/' component={Index}/>
                    </Switch>
                    <Route path='/:nav?' component={Tab} />
                </div>
            </BrowserRouter>
        )
    }
}