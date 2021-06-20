import React, { Component } from 'react'
import './AddTodo.css'
export class AddTodo extends Component {
    state = {
      title:''  
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    render() {
        return (
           <form onSubmit={this.onSubmit} className="frm-add"style={{display: 'flex'}}>
                <input
                 type="text" 
                 name="title" 
                 placeholder="Add Todo ..."
                 value={this.state.title}
                 onChange={this.onChange}
                  />
                  <input
                  type="submit"
                  value="Submit"
                  className="btn"
                  style={{flex:1}}
                 onSubmit={this.onSubmit}
                  />
           </form>
        )
    }
}

export default AddTodo
