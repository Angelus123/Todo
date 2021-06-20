import React, {Component} from 'react';
import Todos from '../components/pages/Todo/Todos';
import AddTodo from '../components/pages/AddTodo/AddTodo';
import About from '../components/pages/About/About';
import uuid from 'react-uuid';

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
    
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed=!todo.completed
            
            }
            return todo;
            }) })
        }
        
        //Delete========================================
        delTodo = (id) => {
            console.log(id)
        this.setState({todos: [...this.state.todos.filter(todo => todo.id
            !==id)]});
        }
        addTodo = (title) => {
            // console.log('izere',title)
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
                    <Route exact path="/" render={props => (
                    
                    <React.Fragment>
                        <AddTodo addTodo={this.addTodo} />
                        <Todos todos={this.state.todos} 
                            markComplete = 
                            {this.markComplete}
                            delTodo={this.delTodo}/>
                    </React.Fragment>

                    )} />
                    <Route path="/About" component={About} />
                </div>   
            </div>
        </Router>

            ); 
            } 
        }


    export default App;
