import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
export class TodoItem extends Component {
    getStyle = () =>{
    return { 
     
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
}
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()} className="todo-item">
            <p>
            <input type = "checkbox" onChange={this.props.markComplete.bind
            (this,id,title) } className="checkbox-item"/> {' '}
            {title}</p>   
            <button onClick={this.props.delTodo.bind(this,id)} className = 'btn-style-delete'>x</button>
            
            </div>
        )
    }
}
 
//PropTypes
TodoItem.protoType={
    todos: PropTypes.object.isRequired
}



export default TodoItem

