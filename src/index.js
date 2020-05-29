import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {init} from 'd2';

const config = {};
if (process.env.NODE_ENV === 'development') {
    // baseUrl = 'https://hmis10.health.go.ug/training/';
    // config.baseUrl = `https://hmis10.health.go.ug/training/api`;
    //config.baseUrl = `http://localhost:8080/api`;
    // config.headers = {Authorization: 'Basic YnJpYW46TnRhcmUxMjMj'}; //HIMS 3
    //config.headers = {Authorization: 'Basic YWRtaW46ZGlzdHJpY3Q='}; // admin
    // config.headers = {Authorization: 'Basic SElTUFVnYW5kYTpIaXNwQDIwMTk='};// HMIS10
    config.baseUrl = `http://localhost:8989/dhis/api`;
    config.headers = { Authorization: 'Basic ' + btoa('pentaho:Pentaho1') };
} else {
    let baseUrl = '';
    let urlArray = window.location.pathname.split('/');
    let apiIndex = urlArray.indexOf('api');
    if (apiIndex > 1) {
        baseUrl = '/' + urlArray[apiIndex - 1] + '/';
    } else {
        baseUrl = '/';
    }

    baseUrl = window.location.protocol + '//' + window.location.host + baseUrl;
    config.baseUrl = baseUrl + 'api'
}
init(config).then(d2 => {
    window.d2 = d2;
    ReactDOM.render(<App d2={d2}/>, document.getElementById('root'));
    serviceWorker.unregister();
}).catch(e => console.error);



