import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'
import logMiddleware from './middleware/log';

const store = createStore(rootReducer, applyMiddleware(logMiddleware));
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);