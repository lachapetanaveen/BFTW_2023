import React, { Component } from 'react';
import Footer from '../../components/footer';
import DynamicForm from '../../components/dynamicform';
import NGLVHeader from '../../components/header';



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
            {/* <header>
                <h2>Welcome to the Family of Christ</h2>
            </header> */}
            
           <NGLVHeader />
            <section id="intro" class="content-section">

            <div className='container-fluid content'>
            <p className='fsize'>Praise be to God! He is faithful and He loves you!</p>
            <p className='fsize'>Being part of the family of Jesus Christ means you are now part of something meaningful and beautiful and bigger than yourself. You are part of a journey WITH God!</p>
              <p className='fsize'>This journey will take the rest of your life. It never stops. And God will never stop loving you and helping you.</p>
               <p className='fsize'>The journey of a Christian has many steps.</p>
               <p className='fsize' style={{textAlign:'justify'}}>
               <li className='fsize'>Hearing God’s Word</li>
               <li className='fsize'> Believing God</li>
               <li className='fsize'>Connecting with God</li>
               <li className='fsize'>Living with God</li>
               <li className='fsize'>Serving God's People So Keep going</li>
               <li className='fsize'>Keep reading God’s Word, the Bible, to learn about Jesus and how to live as a Christian.</li>
               <li className='fsize'>Pray to God telling Him why you love Him and asking Him for help.</li>
               <li className='fsize'>Be baptized.</li>
               <li className='fsize'>Gather with other Christians to pray and read the Bible.</li>
               <li className='fsize'>Love God, and Love people!</li>
               </p>
               <DynamicForm fields={fields} onSubmit={handleSubmit} />
            </div>
            </section>
            </div>
            <Footer /> 
        </>
     );
}
 
export default IHaveAcceptedJesus;