import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Tab from './Tab/Tab.js';
import Header from './Header/Header.js';
import Index from './Index/Index.js';
import Own from './Own/Own.js';
import Launch from './Launch/Launch.js';
import Login from './Launch/Login.js';
import Detail from './Detail/Detail.js';
import Receive from './Receive/Receive.js';
import UserMessage from './Own/UserMessage.js';
import AddressList from './Own/AddressList';
import Finish from './Finish/Finish.js';
import Post from './Post/Post.js';
import Verification from './Verification/Verification.js';
import VerificationFail from './Verification/VerificationFail.js';
import Register from './Register/Register.js';
import RegisterPassword from './Register/RegisterPassword.js';
import FinishTask from './Own/FinishTask.js';
import PublishTask from './Own/PublishTask.js';
import ToFinishTask from './Own/toFinishTask.js';

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
            <HashRouter history={history}>
                <div>
                    <Route path='/' component={Launch} exact={true}/>
                    <Route path='/login' component={Login} />
                    <Route path='/finish/:userId/:fulfillerId' component={Finish} exact={true}/>
                    <div>
                        <Route path='/:nav' component={Header} />
                        <Route path='/detail/:itemId/:userId' component={Detail}/>
                        <Route path='/post/:userId' component={Post} />
                        <Route path='/verification' component={Verification} />
                        <Route path='/verificationFail' component={VerificationFail} />
                        <Route path='/register' component={Register} /> 
                        <Route path='/registerPassword' component={RegisterPassword} />
                        <Route path='/receive/:note/:workTime' component={Receive} />
                        <Switch>
                            <Route path='/index/:userId' component={Index}/>
                            <Route path='/own/:userId' component={Own} />
                            <Route path='/finishTask/:userId' component={FinishTask} />
                            <Route path='/publishTask/:userId' component={PublishTask} />
                            <Route path='/toFinishTask/:userId' component={ToFinishTask} />
                            <Route path='/userMessage/:gender/:name/:englishName/:qqNo/:telNo' component={UserMessage} />
                            <Route path='/addressList/:userId' component={AddressList} />
                        </Switch>
                        <Route path='/(index|own)/:userId' component={Tab} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}