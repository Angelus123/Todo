import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class TodoItem extends Component {
    getStyle = () =>{
    return { 
       backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
}
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p>
            {/* <input type = "checkbox" onChange={this.markComplete/*.bind(this)/> */}
            <input type = "checkbox" onChange={this.props.markComplete.bind
            (this,id,title) }/> {' '}
            {title}</p>   
            <button onClick={this.props.delTodo.bind(this,id)} style = {btnStyle}>x</button>
            
            </div>
        )
    }
}
 
//PropTypes
TodoItem.protoType={
    todos: PropTypes.object.isRequired
}


const btnStyle = {
       backgroundColor:'#ff0000',
       color: '#fff',
       border: 'none',
       padding: '5px 9px',
       borderRadius: '50%',
       cursor: 'pointer',
       float: 'right'
}
export default TodoItem

