import React from "react";
// import { Link,Outlet } from "react-router-dom";
function Login(){
    let sub=((e)=>{
    e.preventDefault();
    // const login=()=>{
    //     localStorage.setItem('login',true)
    // }
    });
    
    return(
        <div className="login">
        <h2>LOGIN HERE</h2>
        <div className=""><h5>Enter Username </h5></div>

        <input type="text" placeholder="Enter username"></input> 
        <br/>
        <br/>
        <div className=""><h5>Enter Password </h5></div>

        <input type="password" placeholder="Enter password"></input>
        <br/>
        <br/>
        <button onClick={sub}>Submit</button>
        </div>
    );
}
export default Login