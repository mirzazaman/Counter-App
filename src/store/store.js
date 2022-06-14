import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Redux/Reducers/Reducer/Reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;