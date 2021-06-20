import React, {Component} from 'react';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import Header from '../components/layout/Header';
import About from '../components/pages/About';
// import app from "./components/Authentication/base";
import uuid from 'react-uuid';
import UserAuth from './UserAuth';
import { BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component{

 
    state = {
        todos:[ {
        id: uuid(),
        title:'Take out the trash',
        completed:false
    },

    {
        id: uuid(),
        title:'Dinner with wife',
        completed:false
    },
    
    {
        id: uuid(),
        title:'Meeting with boss',
        completed:false
    }
    ]
}

//Toggle Complete=====================================
markComplete = (id) => {
    console.log(id)
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
            todo.completed=!todo.completed
            // todo.title="felix"
        }
        return todo;
    }) })
}
    
//Delete========================================
delTodo = (id) => {
    // console.log(id)
this.setState({todos: [...this.state.todos.filter(todo => todo.id
    !==id)]});
}
addTodo = (title) => {
    console.log(title)
 const newTodo = {
    id: uuid(),
    title,
     completed: false 
 }

  this.setState({todos: [...this.state.todos,newTodo]})
 }
 

    render(){

       

        return(
       <Router>
      <div className="App">
    
     <div className="container">
          <Header />
         <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
           <Todos todos={this.state.todos} markComplete = 
           {this.markComplete} delTodo={this.delTodo}/>
          

          </React.Fragment>
      )} />
      <Route path="/About" component={About} />
      <Route path="/UserAuth" component={UserAuth}/>
      </div>
      
      </div>
      </Router>

        ); 
    } 
}


    export default App;
