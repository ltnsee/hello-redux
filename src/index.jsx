import React from 'react';
import ReactDOM from 'react-dom';
// import App from './example/App1';//react + state
// import App from './example/App2';//react + redux
// import { App } from './example/App3';//react + redux + react-redux
import { App } from './example/App4';//react + redux + react-redux
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
