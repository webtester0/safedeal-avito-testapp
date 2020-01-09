import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "./reducers/reducer";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);

export default store;
