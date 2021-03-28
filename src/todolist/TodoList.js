import React,{ Component,Fragment } from "react";
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component{
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数会重新执行
    this.state={
      inputValue: '',
      list: [],
    }
    this.handleInputChange =this.handleInputChange.bind(this);
    this.hanleBtnClick =this.hanleBtnClick.bind(this);
    this.hanleItemDelete =this.hanleItemDelete.bind(this);
  }
  render() {
    return(// JSX中使用js语法或者变量需要使用{}包裹
      <Fragment>
      <label htmlFor='insertArea'>输入内容</label>
      <input
      id='insertArea'
      className='input'
      value={this.state.inputValue}
      onChange={this.handleInputChange}
      ref={(input)=>{this.input = input}}/>
      <button onClick={this.hanleBtnClick}>提交</button>
      <ul>
        {this.getTodoItem()}
      </ul>
    </Fragment>
    )
  }
  // ajax请求发这里
  componentDidMount() {
    axios.get('/api/todolist').then((res)=>{
      this.setState(()=> ({
          list: [...res.data]
      }))
    }).catch(()=>{
      alert('error')
    })
  }

  getTodoItem() {
    return this.state.list.map((item,index) => {
      return <TodoItem content={item} index={index} key={index} deleteItem={this.hanleItemDelete}/>
    })
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  hanleBtnClick() {
    this.setState((prevState) => ({ //prevState改变之前的status
        list: [...prevState.list,prevState.inputValue],
        inputValue: '',
    }))
    // this.setState({
    //   list: [...this.state.list,this.state.inputValue],
    //   inputValue: '',
    // })
  }
  hanleItemDelete(index) {
    // immutable
    // state 要想改变state的值必须拷贝一个副本
    // const list = [...this.state.list];
    // list.splice(index,1);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);
      return{list}
    })
    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList;
