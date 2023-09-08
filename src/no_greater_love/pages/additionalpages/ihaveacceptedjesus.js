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
            <p>Praise be to God! He is faithful and He loves you!</p>
            <p>Being part of the family of Jesus Christ means you are now part of something meaningful and beautiful and bigger than yourself. You are part of a journey WITH God!</p>
              <p>This journey will take the rest of your life. It never stops. And God will never stop loving you and helping you.</p>
               <p>The journey of a Christian has many steps.</p>
               <p style={{textAlign:'justify'}}>
               <li>Hearing God’s Word</li>
               <li> Believing God</li>
               <li>Connecting with God</li>
               <li>Living with God</li>
               <li>Serving God's People So Keep going</li>
               <li>Keep reading God’s Word, the Bible, to learn about Jesus and how to live as a Christian.</li>
               <li>Pray to God telling Him why you love Him and asking Him for help.</li>
               <li>Be baptized.</li>
               <li>Gather with other Christians to pray and read the Bible.</li>
               <li>Love God, and Love people!</li>
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