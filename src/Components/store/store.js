import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from '../../reducers/RootReducer.js';

const initialState = {};

const middleware = [thunk];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;
