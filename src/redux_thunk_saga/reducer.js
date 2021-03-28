import { INIT_LIST_ACTION,CHANGE_INPUT_VAL,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './actionTypes';
const defaultState = {
    inputVal: '',
    list: []
}
// reducer 可以接受state,但是绝不能修改state
//eslint-disable-next-line
export default (state=defaultState,action) => {
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if(action.type === CHANGE_INPUT_VAL) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        console.log(newState);
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        console.log(newState);
        return newState;
    }
    return state;
}