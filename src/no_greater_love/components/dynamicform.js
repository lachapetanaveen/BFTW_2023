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
                    <label style={{ textAlign: 'left', display: 'block',fontSize:'12px'}} >{field.label}<span style={{color:'red'}}>*</span></label> : 
                    <label style={{ textAlign: 'left', display: 'block',fontSize:'12px'}} >{field.label}  <span style={{color:'red',fontSize:'10px'}}>(Optional)</span></label>
                }
                
    <input type="text"
                             value={formData[field.name]}
                            placeholder={`Enter ${field.label}`}
                            style={{height:'40px',fontSize:'12px'}}
                              />
                              </div>
                
                   
            
             )
            })}
            </div>
            <input style={{fontSize:'12px'}} onClick={() => handleSubmit()} type="submit" value="Submit" />
  
</div>
        </div>
        
       
            
        </>
     );
}
 
export default DynamicForm;