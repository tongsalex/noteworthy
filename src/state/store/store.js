import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// removed logger inside applyMiddleware()
import rootReducer from '../reducers/root';

const configureStore = (preloadedState = {}) => {
    return createStore( 
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk, logger)
    )
};

export default configureStore;