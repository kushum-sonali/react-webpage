import React from "react";
import "./footer.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import Button from "react-bootstrap/esm/Button";

function Footer(){
    return(
<>
<div className="col-12 row my-3 footer">
        <div className="col-sm-1 footer-div1">
          <div className="footer-items-div">LOGO</div>
          <div className="footer-items-div dot-div">
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
          </div>
          <div className="footer-items-div dot-div">
            <div className="icon-footer">
              {/* <InstagramIcon /> */}
            </div>
            <div className="icon-footer">
              {/* <InstagramIcon /> */}
            </div>
            <div className="icon-footer">
              {/* <InstagramIcon /> */}
            </div>
          </div>
        </div>
        <div className="col-sm-11 footer-div2 my-5">
          <div className="footer-head">
            <h1 className="my-5 py-5">TO-DO APP</h1>
            <h3>CONTACT-US</h3>
          </div>
          <div className="base-footer py-5">
            <div className="base-content">
              {/* <Button className="button px-4">Contact Us</Button>  */}
            </div>
            <div className="base-content">
                <h4>Dear Sir/Mam</h4>
                <h6>sonali@gmail.com</h6>
            </div>
            <div className="base-content">
                <h4>Location/phone no.</h4>
                <h4>6132547895</h4>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div className="container d-flex justify-content-center">
            <span className="text-muted"><h3>TODO-ADD LIST HERE</h3></span>
          </div>
        </footer>
    
  </div>
</>
    );
}
export default Footer;