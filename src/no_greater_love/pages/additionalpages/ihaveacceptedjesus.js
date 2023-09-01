import React, { Component } from 'react';
import Footer from '../../components/footer';
import DynamicForm from '../../components/dynamicform';



const IHaveAcceptedJesus = () => {
    const fields = [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required:true
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required:false
        },
        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
          required:true
        }
      ];

      const handleSubmit = formData => {
        // Handle form submission here
        console.log(formData);
      };
    return ( 
        <>
           <div>
            <header>
                <h2>Welcome to the Family of Christ</h2>
            </header>
            <section id="intro" class="content-section">
            <div className='container-fluid content'>
               <DynamicForm fields={fields} onSubmit={handleSubmit} />
            </div>
            </section>
            </div>
            <Footer /> 
        </>
     );
}
 
export default IHaveAcceptedJesus;