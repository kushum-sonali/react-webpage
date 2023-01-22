import React from 'react'
import {BrowserRouter, Route, Routes,Link,NavLink}from 'react-router-dom';
 function NavBar(){
     return(
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 fixed-top ">
      <div className="container-fluid text-white h4">
        <a className="navbar-brand text-white" href="#"><h3>TO-DO</h3></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">hello</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto h5 text-decoration-none" >
           
            <li className="nav-item">
            <Link to={'/signup'}><span className="nav-link active text-white" aria-current="page">SIGNUP</span></Link>
            </li>
            <li className="nav-item">
            <Link to={'/login'}><span className="nav-link active text-white" aria-current="page">LOGIN</span></Link>
            </li>  
            <li className="nav-item">
              <Link to={'/'}><span className="nav-link active text-white" aria-current="page">Home</span></Link>
            </li>
            <li className="nav-item">
            <Link to={'/about'}><span className="nav-link active text-white" aria-current="page">ABOUT</span></Link>
            </li>
            <li className="nav-item">
            <Link to={'/todo'}><span className="nav-link active text-white" aria-current="page">To-Do</span></Link>
            </li>
            <li className="nav-item">
            <Link to={'/contact'}><span className="nav-link active text-white" aria-current="page">Contact</span></Link>
            </li>
            </ul>
          <form className="d-flex" role="search">
            
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </header>
       )
 }
 export default NavBar;