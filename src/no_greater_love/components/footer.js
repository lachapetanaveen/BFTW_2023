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
          <button onClick={() => senddownload()} id="downloadButton">Digital Download</button>
          <button onClick={() => sendbooklet()} id="physicalCopyButton">Physical Copy</button>
          <button onClick={() => sendemailsignup()} id="emailButton">7 Day Email</button>
        </div>
      </footer>
     );
}
 
export default Footer;