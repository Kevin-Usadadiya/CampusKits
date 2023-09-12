import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {

      await signup(email, password)
      navigate('/')
    } catch (error) {
      setError(error.message)
      alert(error.message)
    }
 
  };

    // For Google Auth

  const {user, signup} = UserAuth()
  const navigate = useNavigate()


  useEffect(()=>{
      if(user != null){
          navigate('/')
      }
  },[user,navigate]) // On user change this effect will run
  return (
      <div className="d-flex flex-wrap mt-5">
        <div id="login_page_image_section">
          <div className="mt-5 pt-5 login_page_side_description" style={{position:"fixed"}} >
              <h1>Welcome to CampusKits</h1>
              <h3>Hello, IoT Enthusiast!</h3>
              <p>Discover the Future of IoT with Us</p>
                <p>Your One-Stop Shop for Arduino Boards, Components, and More!</p>
                <p>Empowering Makers and Innovators with Cutting-Edge IoT Tech</p>

          </div>
        </div>

        <div id="login_info" className="mt-5 p-4">
          <div className="mb-5 d-flex justify-content-center ">
            <img
              src="https://i.ibb.co/BzRNTHw/centerlogo.png"
              alt="Center Logo"
              className="login_header_image"
              width="180px"
            />
          </div>
          <div className="container mb-2">
            <h1 style={{ fontFamily: "source-code-pro", fontWeight: "bold" }}>
             Sign in
            </h1>
            <p className="w-75 ">Sign in to continue</p>
          </div>

          <div id="login_form container">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label mb-2">
                  <strong>Email</strong>
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
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
                  value={password}
                  onChange={(e) => {setPassword(e.target.value);}}
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
                  Sign Up
                </button>
              </div>

             
              <br />
            </form>
            <hr />
            <div className="d-flex justify-content-center">
              <Link to="/login"><strong>Already have an account?</strong></Link>
            </div>
           
          </div>
        </div>
      </div>

  )
}

export default Signup
