import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';

import App from 'js/components/App';

import configureStore from 'js/store/configureStore';
import rootApiSaga from 'js/sagas/authSaga';

// import 'bootstrap/dist/css/bootstrap.min.css';

const { store, sagaMiddleware } = configureStore();

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

sagaMiddleware.run(rootApiSaga);
