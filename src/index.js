import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./store/Store";
import {Provider} from "react-redux";
import {CookiesProvider} from 'react-cookie';

import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'easytimer.js/dist/easytimer.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>
    , document.getElementById('root')
);

serviceWorker.unregister();
