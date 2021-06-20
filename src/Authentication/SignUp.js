import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from './base'
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


    <div style={lgnStyle}>
        <h1>Login</h1>

        <form onSubmit={handleSignUP}>
               <div>
                <input name="name" type="text" placeholder="Fullname"  style={inptStyle} />
               </div>
               <div>
                <input name="Tel" type="phone" placeholder="Tel:"  style={inptStyle} />
               </div>
              <div>
                <input name="email" type="email" placeholder="Email"  style={inptStyle} />
               </div>
            <div>
           
            <input name="password" type="password" placeholder="Password"  style={inptStyle} />  
    </div>
      <button type="submit" style={btnStyle}>Sign Up</button>
        
      
    </form>

</div>

        
   
)
};
const inptStyle ={
    backgroundColor:'#eef',
    height: '40px',
    width:'90%',
    borderBottom: '1px #079 solid',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    
    margin: '3px',

  
   
}
const lgnStyle = {
    width:'30%',
    color: '#fff',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
    
}
const btnStyle = {
    backgroundColor:'#077',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    
    margin: '1px',
}


    //=========================================================
  

export default withRouter(SignUp);