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
  let location = useLocation();
  let navigate = useNavigate();
  const [homelink,setHomeLink] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const clickhome = (item) => {
    if(item.to === 'home'){
      props.clearpadd(true)
    }
    
  }
  const scrollToSection = () => {
    const currentLink = links.find((link) => link.link === location.pathname);
    console.log(currentLink,'currentLink');
    if (currentLink) {
      scroll.scrollTo(currentLink.to, {
        duration: 500,
        smooth: true,
        offset: -50,
      });
    } else {
      scroll.scrollToTop({
        duration: 500,
        smooth: true,
      });
    }
  };
  useEffect(() => {
   
      scrollToSection();
    
  }, [location.pathname]);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const sendhome = () => {
    navigate('/home')
  }
    return ( 
        <>
              <div>
          <nav className='nglvheader'>
            <div className="nglvnavbar-container">
            
              <div style={{cursor:'pointer'}}>
                <img className='nglvlogo' onClick={() => sendhome()}  src={require('../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} alt="logo" />
              </div>
                <ul className="nav-links">
               
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
           
                </ul>
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i style={{color:'black'}} className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
            </div>
            </div>
          </nav>
        </div>
        </>
     );
}
 
export default NGLVHeader;