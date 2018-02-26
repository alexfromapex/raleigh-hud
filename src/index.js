import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import './index.css';
import DataView from './containers/DataView/DataView';
import Table from './components/Table/Table';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={DataView} />
                <Route path="/table" component={Table} />
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
