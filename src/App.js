import React, {Component}from 'react'
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/SignUp/SignUp";
import { AuthoProvider } from "./Authentication/Auth";
import PrivateRoute from './Authentication/PrivateRouter';
import Header from './components/layout/Header/Header';
import user from "./Authentication/user";
import About from "./components/pages/About/About"
import { BrowserRouter as Router,Route , Switch} from 'react-router-dom';

class App extends Component {
   
    render () {
     
        return(
        <div>
    
        <AuthoProvider>  
            <Router>
                <Header/>
                <Switch> 
                    <PrivateRoute exact path="/" component={user} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
        </AuthoProvider> 

        </div>
     )
    }
}
export default App