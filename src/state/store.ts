import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducers from './reducers/CombineReducers';

 const store = createStore(
    CombineReducers,
    {},
    applyMiddleware(thunk)
)

export default store;