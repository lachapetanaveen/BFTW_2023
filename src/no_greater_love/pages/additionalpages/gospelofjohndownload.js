import React from 'react';
import DynamicForm from '../../components/dynamicform';
import Footer from '../../components/footer';
import NGLVHeader from '../../components/header';



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
              <NGLVHeader />
                {/* <header>
                    <h2>Download Form</h2>
                </header> */}
                <section id="intro" class="content-section">
                <div >
              <img src={require('../../../assets/NGLV_images/home_banner.png')} style={{ width: '100%', height: '350px' }} />
            </div>
            <p className='fsize'>Please fill out the form to receive your FREE digital download of The Gospel of John.</p>
            <p className='fsize'>After submitting the form, you will be sent to a new page where you can download a PDF.</p>
             
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