import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const getMiddleware = () => applyMiddleware(reduxPromise(), thunk, logger);

export default createStore(rootReducer, composeWithDevTools(getMiddleware()));
