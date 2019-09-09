import * as Actions from '../Actions/ActionTypes';
console.log('reducer');
const LoginReducer = (state ={username:"",password:""},action) => {
    console.log('reducer',state,action);
    
    switch (action.type){
        case Actions.username:
            return {
                ...state,
                username: action.payload
            };
        case Actions.password:
            return {
                ...state,
                password: action.payload
            };
        default:
            return state;
    }
}
export default LoginReducer;
