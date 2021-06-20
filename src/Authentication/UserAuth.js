import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import user from "./user";
import Login from "./Login";
import SignUp from "./SignUp";
// import app from "./base";
import { AuthoProvider } from "./Auth";
import PrivateRoute from './PrivateRouter';
import HeaderAuth from '../components/layout/HeadAuth';

const UserAuth = () => {
    return (
        <AuthoProvider>  
<Router>
  {/* <div className="App">
    
    <div className="container"> */}

    <HeaderAuth />
       
     <PrivateRoute exact path="/" component={user} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login}/>


       
       {/* // </div> */}
        {/* <button onClick= {() => app.auth().signOut()}>Sign out</button> */}
       {/* // </div> */}
        </Router>
         </AuthoProvider> 
    );

} 
export default UserAuth; 