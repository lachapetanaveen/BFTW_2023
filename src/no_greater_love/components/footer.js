import React, { Component } from 'react';



const Footer = () => {
    const senddownload = () => {
        window.open('/gospelofjohndownload','_blank')
      }
      const sendbooklet = () => {
        window.open('/gospelofjohnbooklet','_blank')
      }
      const sendemailsignup = () => {
        window.open('/jesusiamemailsignup','_blank')
      }
    return ( 
        <footer class="universal-footer">
        <div class="footer-buttons">
          <div className='row'>
            <div className='col-md-4'>
            <button onClick={() => senddownload()} id="downloadButton"><img src={require('../../assets/NGLV_images/PDF Download.jpg')} /></button>
            </div>
            <div className='col-md-4'>
            <button onClick={() => sendbooklet()} id="physicalCopyButton"><img src={require('../../assets/NGLV_images/Booklet Order.jpg')} /></button>
            </div>
            <div className='col-md-4'>
            <button onClick={() => sendemailsignup()} id="emailButton"><img src={require('../../assets/NGLV_images/Email Signup.jpg')} /></button>
            </div>
          </div>
          
          
         
        </div>
      </footer>
     );
}
 
export default Footer;