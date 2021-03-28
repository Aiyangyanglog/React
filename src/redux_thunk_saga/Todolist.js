import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store'
import { getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction } from './store/actionCreator'
import TodoListUI from './TodoListUI';

class Todolist extends Component{
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleStoreChange =this.handleStoreChange.bind(this);
        this.handelBtnClick = this.handelBtnClick.bind(this,this.state.inputVal);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return <TodoListUI 
        inputVal={this.state.inputVal}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handelBtnClick={this.handelBtnClick}
        handleItemDelete={this.handleItemDelete}
        />
    }


    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handelBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}
export default Todolist;