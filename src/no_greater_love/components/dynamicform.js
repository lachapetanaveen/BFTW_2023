import React, { Component,useState } from 'react';

import { toast } from 'react-toastify';

const DynamicForm = ({fields,handlesubmit}) => {
    const initialFormData = {};
    fields.forEach(field => {
      initialFormData[field.name] = '';
    });
  
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = () => {
        const requiredFields = fields.filter(field => field.required);
    const isFormValid = requiredFields.every(field => !!formData[field.name]);

    if (!isFormValid) {
        toast.error('Please fill in all required (*) fields.');
     
    }else{
        handlesubmit(formData);
    }
      
      };
    return ( 
        <>
        <div className="dynform-container">
        <div  className='dynform'>
          <div >
         {fields.map((field) => {
                    return(
            <div>
                {field.required ? 
                    <label style={{ textAlign: 'left', display: 'block'}} >{field.label}<span style={{color:'red'}}>*</span></label> : 
                    <label style={{ textAlign: 'left', display: 'block'}} >{field.label}  <span style={{color:'red',fontSize:'10px'}}>(Optional)</span></label>
                }
                
    <input type="text"
                             value={formData[field.name]}
                            placeholder={`Enter ${field.label}`}
                          //  style={{width:'100%'}}
                              />
                              </div>
                
                   
            
             )
            })}
            </div>
            <input onClick={() => handleSubmit()} type="submit" value="Submit" />
    {/* <label style={{ textAlign: 'left', display: 'block', marginTop: '10px' }} for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label style={{ textAlign: 'left', display: 'block', marginTop: '10px' }} for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label style={{ textAlign: 'left', display: 'block', marginTop: '10px' }} for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select> */}

 
</div>
        </div>
        
       
            
        </>
     );
}
 
export default DynamicForm;