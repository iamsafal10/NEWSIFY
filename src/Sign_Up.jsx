import React from "react";

export default function SignUp(){
    return(
        <div className="left_p1_body p-2 flex-row">
  <label for="Username">Username:
    <input type="text" id="username"></input>
  </label>
  <label for="Password">Password:
    <input type="text" id="password"></input>
  </label>
  <button className="Sign_Up_button">Sign_Up</button>
</div>
    )
}