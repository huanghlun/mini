import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tab from './Tab/Tab.js';
import Header from './Header/Header.js';
import Index from './Index/Index.js';
import Own from './Own/Own.js';
import Launch from './Launch/Launch.js';
import Detail from './Detail/Detail.js';
import Receive from './Receive/Receive.js';
import UserMessage from './Own/userMessage.js';
import AddressList from './Own/AddressList';

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
                    <Route path='/' component={Launch} exact={true}/>
                    <div>
                        <Route path='/:nav' component={Header} />
                        <Route path='/detail' component={Detail}/>
                        <Route path='/receive' component={Receive} />
                        <Switch>
                            <Route path='/index' component={Index}/>
                            <Route path='/own' component={Own} />
                            <Route path='/userMessage' component={UserMessage} />
                            <Route path='/addressList' component={AddressList} />
                        </Switch>
                        <Route path='/(index|own)' component={Tab} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}