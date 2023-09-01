import React, { Component } from 'react';
import DynamicForm from '../../components/dynamicform';
import Footer from '../../components/footer';



const DownloadForm = () => {
    const fields = [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required:false
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required:true
        },
        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
          required:false
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
                    <h2>Download Form</h2>
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
 
export default DownloadForm;