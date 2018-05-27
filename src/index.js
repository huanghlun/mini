import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './component/App.js';
import './assets/layout/main.css'; //全局css样式

ReactDom.render(<App />, document.getElementById("root"));