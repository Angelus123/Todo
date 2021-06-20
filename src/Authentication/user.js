import React from "react";
import app from "./base";
import Home from "./Home"

const user = () => {
    return (  
<>

        
<button onClick= {() => app.auth().signOut()}>Sign out</button>   
<Home/>
  </> 
   )
}
export default user;