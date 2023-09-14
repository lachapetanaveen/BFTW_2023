import React from 'react';
import Footer from '../../components/footer';
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
            <div >
              <img src={require('../../../assets/NGLV_images/home_banner.png')} style={{ width: '100%', height: '350px' }} />
            </div>
            <div className='container-fluid content'>
            <p className='fsize'>Praise be to God! He is faithful and He loves you!</p>
            <p className='fsize'>Being part of the family of Jesus Christ means you are now part of something meaningful and beautiful and bigger than yourself. You are part of a journey WITH God!</p>
              <p className='fsize'>This journey will take the rest of your life. It never stops. And God will never stop loving you and helping you.</p>
               {/* <p className='fsize'>The journey of a Christian has many steps.</p> */}
               <div className='row'>
                  <div style={{textAlign:'justify'}} className='col-md-6'>
                  <p className='fsize' style={{fontWeight:600}}>The journey of a Christian has many steps:</p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Hearing God’s Word</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'> Believing God</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Connecting with God</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Living with God</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Serving God's People </li></p>
               <p className='fsize' style={{fontWeight:600}}>So Keep going :</p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Keep reading God’s Word, the Bible, to learn about Jesus and how to live as a Christian.</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Pray to God telling Him why you love Him and asking Him for help.</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Be baptized.</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Gather with other Christians to pray and read the Bible.</li></p>
               <p style={{marginLeft:'20px'}}><li className='fsize'>Love God, and Love people!</li></p>
               
                  </div>
                  <div className='col-md-6'>
                    <img  style={{width:'360px',height:'360px'}}src={require('../../../assets/NGLV_images/Kenya Women.jpg')} />
                  {/* <DynamicForm fields={fields} onSubmit={handleSubmit} /> */}
                  </div>
               </div>
              
               
            </div>
            </section>
            </div>
            <Footer /> 
        </>
     );
}
 
export default IHaveAcceptedJesus;