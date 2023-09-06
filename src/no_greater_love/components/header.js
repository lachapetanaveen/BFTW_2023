import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    return ( 
        <>
            <div>
          <nav className='nglvheader'>
            <div className="nglvnavbar-container">
              <div className="logo">
                <img className="logo_img" src={require('../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} alt="logo" />
              </div>
              {/* <div>
                <li style={{listStyle:'none',textDecorationLine:'underline',cursor:'pointer'}}><Link style={{ color: 'white' }} to={'/register'}>Click Here</Link></li>
              </div> */}
             
                <ul className="nav-links">
                  <li><Link style={{ color: 'white' }} to={'/home'}>Home</Link></li>
                  <li><Link style={{ color: 'white' }} to={'/about'}>The Gospel of John </Link></li>
                  <li><Link style={{ color: 'white' }} to={'/contact'}>Free Tools </Link></li>
                  
                  {/* <button onClick={() => handleOpen()} className="btn btn-sm btn-white"> Login
                  </button>
                  <button onClick={() => sendregister()} className="btn btn-sm btn-white"> Register
                  </button> */}
                </ul>
            

            </div>
          </nav>
          {/* {isDropdownOpen && ( */}

          {/* )} */}
        </div>
        </>
     );
}
 
export default Header;