import React, { Component,useState,useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const links = [
  {
    "to" : 'home',
    "text" : 'Home',
    "link" : '/home'
  },
  {
    "to" : 'gospel of john',
    "text" : 'The Gospel of John',
    "link" : '/thegospeljohn'
  },
  {
    "to" : 'free tools',
    "text" : 'Free Tools',
    "link" : '/freetools'
  }
]
const NGLVHeader = (props) => {
  let location = useLocation()
  const [homelink,setHomeLink] = useState(false)
  const clickhome = (item) => {
    if(item.to === 'home'){
      props.clearpadd(true)
    }
    
  }
  const scrollToSection = () => {
    let path = '';
    if(location.pathname === '/home'){
        path = 'home'
    }else if(location.pathname === '/thegospeljohn'){
      path = 'gospel of john'
    }else if(location.pathname === '/freetools'){
      path = 'free tools'
    }
    console.log(path,'pathpath');
    scroll.scrollTo(path, {
      duration: 500,
      smooth: true,
      offset: -50, // You can adjust the offset if needed
    });
  };
  useEffect(() => {
   
      scrollToSection();
    
  }, [location.pathname]);
    return ( 
        <>
              <div>
          <nav className='nglvheader'>
            <div className="nglvnavbar-container">
              {/* <div className="logo">
                <img className="logo_img" src={require('../../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} alt="logo" />
              </div> */}
              <div>
                <img className='nglvlogo'  src={require('../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} alt="logo" />
              </div>
                <ul className="nav-links">
                  {/* <li><Link style={{ color: 'white' }} to={'/home'}>Home</Link></li>
                  <li><Link style={{ color: 'white' }} to={'/about'}>The Gospel of John </Link></li>
                  <li><Link style={{ color: 'white' }} to={'/contact'}>Free Tools </Link></li> */}
                  {links.map((k,index) => {
                      return(
                        <li >
                          {location.pathname === '/home' || location.pathname === '/' || location.pathname === '/thegospeljohn' || location.pathname === '/freetools' ? 
                            <ScrollLink
                            style={{ color: 'white', cursor: 'pointer' }}
                            to={k.to}
                            smooth={true}
                            duration={500}
                          >
                            <span onClick={() => clickhome(k)}>{k.text}</span>
                          </ScrollLink> : 
                          <Link style={{ color: 'white', cursor: 'pointer' }} to={k.link} >{k.text}</Link>
                          }
                        
                 </li>
                      )
                  })}
                  
            {/* <li>
              <ScrollLink
                style={{ color: 'white', cursor: 'pointer' }}
                to="gospel of john"
                smooth={true}
                duration={500}
              >
                The Gospel of John
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ color: 'white', cursor: 'pointer' }}
                to="free tools"
                smooth={true}
                duration={500}
              >
                Free Tools
              </ScrollLink>
            </li> */}
                </ul>
            </div>
          </nav>
        </div>
        </>
     );
}
 
export default NGLVHeader;