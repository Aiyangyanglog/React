import { CHANGE_INPUT_VAL,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST } from './actionTypes';
export const getInputChangeAction=(value) => ({
    type: CHANGE_INPUT_VAL,
    value
})
export const getAddItemAction=() => ({
    type: ADD_TODO_ITEM,
})
export const getDeleteItemAction=(index) => ({
    type: DELETE_TODO_ITEM,
    index,
})
export const initListAction=(data) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getInitList=(data) => ({
    type: GET_INIT_LIST,
})
