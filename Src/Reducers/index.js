import { combineReducers, createStore } from 'redux';

import counterReducer from './CounterReducer'
import loginReducer from './LoginReducer'
console.log('index');
const AppReducers = combineReducers({
    counterReducer,loginReducer
});

const rootReducer = (state, action) => {
    console.log('index',state,action);
    
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;