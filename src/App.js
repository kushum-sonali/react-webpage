import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import Contact from "./components/contactus";
import Protected from "./components/Protected";
import { useEffect } from "react";
// import Footer from "./components/footer";
// import Navbar from "./components/Navbar";
import "./App.css"
import { Route, Routes}from 'react-router-dom';
import Navbar from "./components/NavBar";


function App(){
  let login;
  login=localStorage.getItem('login');
  useEffect(()=>{

      console.log(login)
   },[]);
return(
  <>
 
  <Navbar/>
  {/* <Todo/> */}

  {/* <h1>hello router 6</h1> */}
  <Routes>
    <Route path="/" element ={login ? <Home/>:<Login/>}/>
    <Route path="/about" element ={login ? <About/>:<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={login ? <Home/>:<Signup/>}/>
    <Route path="/todo" element={login ? <Todo/> :<Login/>}/>
    <Route path="/contact" element={login ?<Contact/>:<Login/>}/>


  </Routes>

  </>
  );
}
export default App;