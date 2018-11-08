import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import './index.css';



const store = createStore(combineReducers({
    rootReducer
}), applyMiddleware(
    thunk,
    logger
));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


