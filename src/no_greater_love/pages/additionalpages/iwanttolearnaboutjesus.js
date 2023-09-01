import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const IWantToLearnAboutJesus = () => {
    const [textbox1,setTextbox1] = useState('');
    const [textbox2,setTextbox2] = useState('');
    const [textbox3,setTextbox3] = useState('');
    const submitdata = () => {
        if(!textbox1 || !textbox2 || !textbox3){
            toast.error('Please fill in all required (*) fields.');
        }else {
            toast.success('Answers Submitted')
        }
    }
    return ( 
        <>
             <div>
                <header>
                    <h2>Affirmation of Desire</h2>
                </header>
                <section id="intro" class="content-section">
                <div className='container-fluid content'>
                <div class="content-container">
                    <p>*Three Questions to Ask about Jesus</p>
                    <div className='dynform'>
        
            <div>
               
                    <label style={{ textAlign: 'left', display: 'block'}} >What did he say about himself? <span style={{color:'red'}}>*</span></label> 
                
    <input type="text"
                             value={textbox1}
                            onChange={(e) => setTextbox1(e.target.value)}
                              />
                              </div>
                
                              <div>
               
               <label style={{ textAlign: 'left', display: 'block'}} >What did others say about him when he was alive? <span style={{color:'red'}}>*</span></label> 
           
<input type="text"
                        value={textbox2}
                        onChange={(e) => setTextbox2(e.target.value)}
                         />
                         </div>
                         <div>
               
                    <label style={{ textAlign: 'left', display: 'block'}} >What do those who believe him say about him now? <span style={{color:'red'}}>*</span></label> 
                
    <input type="text"
                             value={textbox3}
                             onChange={(e) => setTextbox3(e.target.value)}
                              />
                              </div>
            
            
            <input onClick={() => submitdata()} type="submit" value="Submit" />
            </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <p>Read Gospel of John</p>
                    <Link to={'/jesusiamemailsignup'} target="_blank" style={{textDecoration:'underline'}}>Learn more about what Jesus says about himself (Sign up for "I Am" email)</Link><br />
                    <Link to={'/gospelofjohnbooklet'} target="_blank" style={{textDecoration:'underline'}}>Click to download Gospel of John with Name only (no email)</Link>
                </div>
                </div>
               
                </section>
                </div>
        </>
     );
}
 
export default IWantToLearnAboutJesus;