import React, { useEffect }  from "react";
import { Link ,useNavigate} from "react-router-dom";


import {GoogleButton} from 'react-google-button'
import {UserAuth} from '../../context/AuthContext'

import './Login.css'

function Login() {

    // For Google Auth

    const {googleSignIn, user, login} = UserAuth()
    const navigate = useNavigate()
  
    const handleGoogleSignIn = async() => {
          
      try{
          await googleSignIn()
          
      }catch(error){
        console.log(error)
      }
    
    };
  
    useEffect(()=>{
        if(user != null){
            navigate('/')
        }
    },[user,navigate]) // On user change this effect will run
  return (
    <>
      <div className="d-flex flex-wrap">

            <div id="login_info" className="mt-3">
              <div className="mb-5 d-flex justify-content-center ">
                <img
                  src="https://i.ibb.co/BzRNTHw/centerlogo.png"
                  alt=""
                  width="180px"
                />
              </div>
              <div className="container mb-2">
                <h1
                  style={{ fontFamily: "source-code-pro", fontWeight: "bold" }}
                >
                  Log in
                </h1>
                <p className="w-75 ">Log in to continue</p>
              </div>

              <div id="login_form container">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label mb-2"
                    >
                      <strong>Email</strong>
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label mb-2"
                    >
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="At least 8 characters"
                      required
                    />
                    <i src="https://i.ibb.co/zh37JbC/view.png"></i>
                    <Link to="https://i.ibb.co/rQ6Jd2t/hide-1.png"></Link>
                  </div>

                  <Link to="/" className="justify-content-end d-flex">
                    Forget password?
                  </Link>
                  <br />
                  <div className="d-flex  justify-content-center ">
                    <button
                      type="submit"
                      className="btn btn-primary w-50  mb-2"
                      id="login_button"
                    >
                      Login
                    </button>
                  </div>
                  <hr />
                  <div className="d-flex  justify-content-center ">
                    <p>Or Login With</p>
                    {/* Login With Google */}
                    <div className='additional_login_button'>     
                      <GoogleButton onClick={handleGoogleSignIn}/>
                    </div>
                  </div>
                  <br />
                </form>
                <hr />
                <div className="d-flex justify-content-center">
                  <p>Don't have an account?</p>
                </div>
                <div className="justify-content-center d-flex">
                  <button className="btn  w-50" id="sign_up_button">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          
            <div id="login_page_image_section">
              <div id='login_page_image'>
                <img
                  src="https://i.ibb.co/MSNwFgc/login-page-4468581-3783954.webp"
                  className="login_image"
                  alt=""
                />
              </div>
            </div>
      </div>
    </>
  );
}

export default Login;
