import React from "react";

export default function Login(){
    return(
        <div className="left_p1_body p-2">
  <label for="Username">Username:  
    <input type="text" id="username"></input>
  </label>
  <label for="Password">Password:   
    <input type="text" id="password"></input>
  </label>
  <button className="Login_button">Login</button>
</div>
    )
}