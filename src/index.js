import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import '@babel/polyfill';
import './index.css';



const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(combineReducers({
    persistedReducer
}), applyMiddleware(
    thunk,
    logger
));

let persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root')
);


