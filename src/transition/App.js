import React,{Component,Fragment} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component{
    constructor(props) {
        super(props)
        this.state={
            list: [],
        }
        this.handleAdditem = this.handleAdditem.bind(this)
    }
    render() {
        return(
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el)=>{el.style.color='blue'}}
                                appear={true}
                                key={index}>
                                <div>{item}</div>
                            </CSSTransition>)
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleAdditem}>toggle</button>
            </Fragment>
        )
    }
    handleAdditem() {
        this.setState((prevState)=>{
            return{
                list: [...this.state.list,'item']
            }
        })
    }
}

export default App;