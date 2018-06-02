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
import Finish from './Finish/Finish.js';
import Post from './Post/Post.js';
import Verification from './Verification/Verification.js';
import VerificationFail from './Verification/VerificationFail.js';

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
            <BrowserRouter history={history}>
                <div>
                    <Route path='/' component={Launch} exact={true}/>
                    <Route path='/finish' component={Finish} exact={true}/>
                    <div>
                        <Route path='/:nav' component={Header} />
                        <Route path='/detail' component={Detail}/>
                        <Route path='/post' component={Post} />
                        <Route path='/verification' component={Verification} />
                        <Route path='/verificationFail' component={VerificationFail} /> 
                        <Route path='/receive/:note/:workTime' component={Receive} />
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