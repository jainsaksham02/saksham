import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import'./Acx.css';
import Oookie from './Oookie';
import Fch from './fch';


// import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Home/>
        <Oookie/>
        <Fch/>
        
    </div>
    ,document.getElementById('root')
);
serviceWorker.unregister();




