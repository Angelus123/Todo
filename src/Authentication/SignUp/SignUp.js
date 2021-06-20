import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom'
import app from '../base'
const SignUp = ({history} )=>{

    const handleSignUP = useCallback(async event =>{
        event.preventDefault();
        const{email, password} = event.target.elements;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        
        } catch (error){
            alert(error);
        }
    
}, [history])
return(


    <div className='lgn-style'>
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUP}>


            <div>
                <input name="name" type="text" placeholder="Fullname"  className='inpt-style' />
            </div>

            <div>
                <input name="Tel" type="phone" placeholder="Tel:"  className='inpt-style'/>
            </div>

            <div>
                <input name="email" type="email" placeholder="Email" className='inpt-style'/>
            </div>

            <div>
                <input name="password" type="password" placeholder="Password" className='inpt-style'/>  
            </div>


      <button type="submit" className='btn-style'>Sign Up</button>
      <p style={{color:'black'}}> Already have account <NavLink to="/login">Login</NavLink> </p>
    </form>

</div>

        
   
)
};


export default withRouter(SignUp);