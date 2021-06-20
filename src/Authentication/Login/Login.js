
import React, { useCallback, useContext } from 'react';
 import './Login.css'
import { withRouter, Redirect } from "react-router";
import { NavLink } from 'react-router-dom'
import app from '../base'

import {AuthContext} from "../Auth.js";


const Login = ({history} )=>{

    const handleLogin = useCallback(
        async event =>{
        event.preventDefault();
        const{email, password} = event.target.elements;
        try{
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        
        } catch (error){
            alert(error);
         }

        }, [history]);
        const {currentUser}= useContext(AuthContext);
        if (currentUser) {
            return <Redirect to= '/'/>;
        }   

return(
  <div className='lgn-style'>
    <h1 >Login</h1>
    <form onSubmit={handleLogin} >
    
        <div>
            <input name="email" type="email" placeholder="Email"  className='inpt-style'  />
        </div>

        <div>
            <input name="password" type="password" placeholder="Password"  className='inpt-style'  />  
        </div>

        <button type="submit" className='btn-style' >Login</button>
       

    </form>
    <p> Not have account <NavLink to="/signup">sign Up</NavLink> </p>
    </div>          
)
};

export default withRouter(Login); 