import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';



const app = document.getElementById('root');


ReactDOM.render(<App/>, app);



registerServiceWorker();



