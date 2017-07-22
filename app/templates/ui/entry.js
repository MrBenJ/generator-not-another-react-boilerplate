import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from 'js/components/App';
// import routes from 'js/routes';
import configureStore from 'js/store/configureStore';

// import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
