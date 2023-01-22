import React from "react";
import About from "./About";
import Todo from "./Todo";
import Contact from "./contactus";
// import Login from "./Login";
// import SignUp from "./Signup";
import Footer from "./footer";
function Home(){
    return (
        <div className="parent-home">
        <div className="">
            <div className="home ">
        {/* <h1 >Home page</h1> */}
        <div className="container-fluid mx-height img-fluid col-12">
        <div class="card text-bg-dark ">
  <img src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?b=1&s=170667a&w=0&k=20&c=dH42Vp7tUc2es74czikFCrQPNJ4rjIaLalfO26KrpfI=" class="card-img" alt="..."/>
  <div class="card-img-overlay container-fluid row d-flext ">
    <h5 class="card-title d-flex justify-content-center my-4 "><b>Home page </b></h5>
    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    {/* <h5 class="card-title d-flex justify-content-center "><b>Home page </b></h5> */}
    <p class="card-text d-flex justify-content-center align-items-center"><small><button type="button" class="btn btn-success ">Views</button></small></p>
  </div>
</div>
            {/* <img className="img-fluid" src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?b=1&s=170667a&w=0&k=20&c=dH42Vp7tUc2es74czikFCrQPNJ4rjIaLalfO26KrpfI="></img> */}
        {/* <h1>this is my first page</h1> */}
        </div>
        </div>
        <About/>
       
        {/* <Contact/> */}
         <Todo/>
        <Footer/> 
      
        </div>
        </div>
    );
}
export default Home;