import React from "react";
import app from "./base";
import App from "./App"
const user = () => {
    return (  
<>
        <h1>Home</h1>
      <button onClick= {() => app.auth().signOut()}>Sign out</button>
<App/>
  </> 
   )
}
export default user;