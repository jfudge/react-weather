import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Components/store/reducers/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './fontawesome/css/all.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));



