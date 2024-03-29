import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,} from 'react-router'
import Header from './Components/Header';

ReactDOM.render(
    // <Router >
    //     <Route path="/" component={App}/>
    //     <Route path="/header" component={Header} />
    // </Router>,document.getElementById('root')
    <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
