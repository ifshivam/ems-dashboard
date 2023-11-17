import React from "react";
import image1 from "../../images/images.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./SignUp.css";
const Signup=()=>{
    return(
      <div style={{ backgroundColor: 'rgb(43, 48, 53)', color: 'white' }} className="d-flex align-items-center justify-content-center vh-100">
      <Form className="rounded p-4 p-sm-3 justify-content-center">
        <img className="mb-4" src={image1} alt="company logo" width="80" height="80" />
        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

        <div className="form-floating" >
          <input type="email" className="form-control" id="floatingInput" placeholder="abc@gmail.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">ConfirmPassword</label>
        </div>
        <div class="form-group my-3">
    <label for="exampleFormControlFile1"></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
        <div>
          <button className="btn btn-primary w-100 my-3 py-2" type="submit">Sign Up</button>
        </div>
        <div>
        <Link to="/signin"> <button className="btn btn-primary w-100  py-2" >
            Sign In
          </button></Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup