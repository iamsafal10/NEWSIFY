import React from "react";
import Login from "./Login";
import SignUp from "./Sign_Up";
import { useState } from "react"; 

export default function Page1() {
  const [login, setlogin] = useState(true)
  const [signup, setsignup] = useState(false)
  function switch_login(){
    if(login==false)
      setlogin(true)
    if(signup)
      setsignup(!signup)
  }
  function switch_signup(){
    if(signup==false)
      setsignup(true)
    if(login)
      setlogin(!login)
  }

  return (
    <div className="page1">
      {/* <div className="nav_p1 ">NAVBAR</div> */}
      <div className="main_p1 flex ">
        <div className="left_p1 flex-row    w-3/5">
        <div className="left_p1_header  text-4xl font-bold ">Newsify</div>
        <div className="p1_content border-2 border-black flex-row ">
        <div className="p1_buttons">
            <button onClick={()=>switch_login()} className="login bg-gray-600 p-4">LOGIN</button>
            <button onClick={()=>switch_signup()} className="signup
            bg-gray-600 p-4">SIGN UP</button>
        </div>
{login &&<Login/>}

{signup && <SignUp/>}
        </div>
          
        </div>
        <div className="right_p1  w-2/5">
          <img
            className="login_img"
            src="/public/Login_page.png"
            alt="welcome"
          />
        </div>
      </div>
    </div>
  );
}
