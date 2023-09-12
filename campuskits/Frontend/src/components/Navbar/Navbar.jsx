import React from 'react';
import {Link} from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import './Navbar.css'


export default function Navbar(props){

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
      try {
        await logOut()
  
      } catch (error) {
        console.log(error)
      }
  
    }
  
    return(
        <>
        {/* <!-- NAVIGATION BAR --> */}
        <nav 
        className="navbar navbar-expand-lg bg-white fixed-top d-flex justify-content-around ">
        <div className="container-fluid">
        <Link className="navbar-brand px-4" to="/">
            <img src="https://i.ibb.co/sbgPvxw/main.png" alt="CampusKits" width="70" height="70" /> 
        </Link>

        <div className="mid">
            <img src="https://i.ibb.co/BzRNTHw/centerlogo.png" alt="" width="180px"/>
         </div>

  
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className={`offcanvas offcanvas-end {props.toggle}`}  tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          
          <div className="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="https://i.ibb.co/sbgPvxw/main.png" alt="CampusKits" width="70" height="70" className="mx-4"/> 
            <img src="https://i.ibb.co/BzRNTHw/centerlogo.pngg" alt="" width="150px"/>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>                    
        <div className="offcanvas-body  d-flex justify-content-center">
            <ul className="navbar-nav ">
                <li className="nav-item px-3">
                    <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item px-3">
                    <Link className="nav-link fw-bold" to="/shop">Shop</Link>
                </li>
                <li className="nav-item px-3">
                    <Link className="nav-link fw-bold" to="/">About Us</Link>
                </li>
                <li className="nav-item px-3">
                    <Link className="nav-link fw-bold"  to="/">Contact Us</Link>
                </li>
                <li className="nav-item px-3">
                    <Link className="nav-link fw-bold"  to="/">Shipping and Returns </Link>
                </li>
                <form className="mt-3" role="search">
                    <div className="d-flex mx-3">

                        <input className="form-search form-control mt-3 me-2 h-75"  type="search" placeholder="Search" aria-label="Search"/>

                        <img className=" search-img mt-3" src="https://cdn-icons-png.flaticon.com/512/122/122932.png" alt="" width="30px" height="30px"/>
                    </div>
                    {
                        user?.email ?
                        <button onClick={handleSignOut} className='login-btn btn btn-primary w-50 mt-4 mx-3'>Logout</button>:
                        <Link className="login-btn btn btn-primary w-50 mt-4 mx-3"  to="/login">👉Login</Link>
                    }
                  </form>
                
            </ul>
        </div>
    </div>


    <div className="search">
    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <span className="mx-2">Search</span> <img src="https://cdn-icons-png.flaticon.com/512/122/122932.png" alt="" width="20px"/>
      </button>
    </div>
     

    <div className="login pt-1 px-4">
        <Link to="/login"><img src="https://www.citypng.com/public/uploads/small/11641484336h6ddhislwsavlw3fq7vthp1pxmgj0cratxydxbhuhzs58ndik9hsxuyunrxqv5csxjhkukgltu7v7e2us0tbkieluxl1hks2uzt8.png" alt="" width="30px" height="30px"/></Link>

        <Link to="/login"><img src="https://static.thenounproject.com/png/2448985-200.png"  alt=" "  width="30px" height="30px"/></Link>
     </div>
      {/* <!-- <div className="right d-flex"> -->
        <!-- <button className="btn text-white px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg> Cart
        </button> --> */}

        
    </div>
</nav>

  {/* <!-- Modal --> */}
  <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" >
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Search For Anything</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form method="post" className="mt-3" role="search">
                <div className="d-flex mx-3">

                    <input className="form-control mt-3 me-2 h-75"  type="search" placeholder="Search" aria-label="Search"/>
                    <img className="mt-3" src="https://cdn-icons-png.flaticon.com/512/122/122932.png" alt="" width="30px" height="30px"/>
                </div>
            </form>

            <hr/>
            <div className="suggestions px-4 pt-1">
                <p>Recent Searches</p>
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <i className="bi bi-clock-history " style={{color:"black"}}></i><strong className="px-3">Ardunio</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <i className="bi bi-clock-history " style={{color:"black"}}></i><strong className="px-3">Ultrasonic Sensor</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <i className="bi bi-clock-history " style={{color:"black"}}></i><strong className="px-3">Sound Sensors</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <i className="bi bi-clock-history " style={{color:"black"}}></i><strong className="px-3">Temprature Sensors</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>


            </div>

            
        </div>
       
      </div>
    </div>
  </div>
        </>
    )
}

