import React, { useEffect } from "react";
import { Link,useNavigate} from "react-router-dom"
function Protected(props){
    const {Component}=props;
    const navigate=useNavigate();
    console.log(Component)
    let login=localStorage.getItem('login');


    return(
        
            <Component/>
        
    )
}
export default Protected;