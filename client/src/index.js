import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers,{},applyMiddleware(reduxThunk));

reactDOM.render(
<Provider store={store}><App /></Provider>,
document.querySelector('#root')
);