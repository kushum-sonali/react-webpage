function SignUp(){
    let ssub=((e)=>{
        e.preventDefault();
    });
    return(
        
        <div className="signup">
            {/* <div className="container-fluid img-fluid">
                <img src="https://media.istockphoto.com/id/1153899947/photo/data-technology-abstract-futuristic-illustration-low-poly-shape-with-connecting-dots-and.jpg?b=1&s=170667a&w=0&k=20&c=BBFZyaq9ljzjH2ZIUzg7umIBY1ZuzAYnelQXvDMlxXM="></img> */}
        <h2 className="sign">SIGNUP HERE</h2>
        <div className=""><h5>Enter Username </h5></div>
        <input type="text" placeholder="Enter username"></input>
        <br/>
        <br/>
        <div className=""><h5>Enter Phone No. </h5></div>
        <input type="number" placeholder="Enter phone Number"></input>
        <br/>
        <br/>
        <div className=""><h5>Set Password</h5></div>
        <input type="password" placeholder="Set password"></input>
        <br/>
        <br/>
        <button onclick={ssub}>Submit</button>
        </div>
        // </div>
    );
}
export default SignUp;