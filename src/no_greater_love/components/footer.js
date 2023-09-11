import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  let navigate = useNavigate()
    const senddownload = () => {
      navigate('/gospelofjohndownload')
        // window.open('/gospelofjohndownload','_blank')
      }
      const sendbooklet = () => {
        navigate('/gospelofjohnbooklet')
        // window.open('/gospelofjohnbooklet','_blank')
      }
      const sendemailsignup = () => {
        navigate('/jesusiamemailsignup')
        // window.open('/jesusiamemailsignup','_blank')
      }
    return ( 
        <footer class="universal-footer">
        <div class="footer-buttons">
          <div className='row'>
            <div className='col-md-4 d-flex aligin-items-left'>
            <button onClick={() => senddownload()} id="downloadButton"><img style={{width:'200px',height:'120px'}} src={require('../../assets/NGLV_images/PDF Download.jpg')} /></button>
            </div>
            <div className='col-md-4'>
            <button onClick={() => sendbooklet()} id="physicalCopyButton"><img style={{width:'200px',height:'120px'}} src={require('../../assets/NGLV_images/Booklet Order.jpg')} /></button>
            </div>
            <div className='col-md-4'>
            <button onClick={() => sendemailsignup()} id="emailButton"><img style={{width:'200px',height:'120px'}} src={require('../../assets/NGLV_images/Email Signup.jpg')} /></button>
            </div>
          </div>
          
          
         
        </div>
      </footer>
     );
}
 
export default Footer;