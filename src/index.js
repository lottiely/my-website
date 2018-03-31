import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bootstrap/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './assets/css/animate.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
