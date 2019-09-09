import * as Actions from '../Actions/ActionTypes';
console.log('reducer');
const CounterReducer = (state ={count:0},action) => {
    console.log('reducer',state,action);
    
    switch (action.type){
        case Actions.COUNTER_INCREMENT:
            return {
                count: state.count + 1
            };
        case Actions.COUNTER_DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}
export default CounterReducer;
