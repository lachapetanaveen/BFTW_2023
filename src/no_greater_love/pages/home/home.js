import React, { Component,useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const testimonialsData = [
    {
      id: 1,
      quote: "I am the bread of life",
      img:require('../../../assets/NGLV_images/Nairobi City Reflecting Lake.jpg'),
      reference: "John 6:36",
    },
    {
      id: 2,
      quote: "I am the light of the world",
      img:require('../../../assets/NGLV_images/Nairobi Skyline Panorama.jpg'),
      reference: "John 8:12",
    },
    {
        id: 3,
        quote: "I am the gate for the sheep",
        img:require('../../../assets/NGLV_images/Nairobi City Reflecting Lake.jpg'),
        reference: "John 10:7",
      },
      {
        id: 4,
        quote: "I am the good shepherd",
        img:require('../../../assets/NGLV_images/Nairobi Skyline with Clouds.jpg'),
        reference: "John 10:11",
      },{
        id: 5,
        quote: "I am the resurrection and the life",
        img:require('../../../assets/NGLV_images/Nairobi Sunlight.jpg'),
        reference: "John 11:25",
      },
      {
        id: 6,
        quote: "I am the way and the truth and the life",
        img:require('../../../assets/NGLV_images/Nairobi City Park.jpg'),
        reference: "John 14:6",
      },{
        id: 7,
        quote: "I am the true vine",
        img:require('../../../assets/NGLV_images/Nairobi Skyline with Clouds.jpg'),
        reference: "John 15:1",
      }
  ];
const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');
  const [showInputField, setShowInputField] = useState(false);
  const [comment,setComment] = useState('');
  const [homelink,setHomeLink] = useState(false)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInputField(event.target.value === 'yes');
  };
const handlecheck = (item) => {
  setSelectedOption(item)
  if(item === 'I have accepted Jesus as my Lord and Savior'){
    window.open('/ihaveacceptedjesus','_blank')
  }else if(item === 'I want to accept Jesus as my Lord and Savior'){
    window.open('/iwanttoacceptjesus','_blank')
  }else if(item === 'I want to learn more about Jesus'){
    window.open('/iwanttolearnaboutjesus','_blank')
  }

}
console.log(homelink,'homelink');
    return (
        <>
            <div>
                {/* <header>
                    <h2>No Greater Love</h2>
                </header> */}
                {/* <Header /> */}
                <div>
          <nav className='nglvheader'>
            <div className="nglvnavbar-container">
              <div className="logo">
                <img className="logo_img" src={require('../../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} alt="logo" />
              </div>
                <ul className="nav-links">
                  {/* <li><Link style={{ color: 'white' }} to={'/home'}>Home</Link></li>
                  <li><Link style={{ color: 'white' }} to={'/about'}>The Gospel of John </Link></li>
                  <li><Link style={{ color: 'white' }} to={'/contact'}>Free Tools </Link></li> */}
                   <li >
                   <ScrollLink
                style={{ color: 'white', cursor: 'pointer' }}
                to="home"
                smooth={true}
                duration={500}
              >
                <span onClick={() => setHomeLink(true)}>Home</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ color: 'white', cursor: 'pointer' }}
                to="gospel of john"
                smooth={true}
                duration={500}
              >
                The Gospel of John
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ color: 'white', cursor: 'pointer' }}
                to="free tools"
                smooth={true}
                duration={500}
              >
                Free Tools
              </ScrollLink>
            </li>
                </ul>
            </div>
          </nav>
        </div>
                <section  id="intro" class="content-section section-to-scroll">
                <div style={{ paddingTop: homelink ? '120px':'2px' }} id="home" className='container-fluid content'>
            
        <div  className='row'>
            <div className='col-md-6 d-flex align-items-center'>
            <p style={{lineHeight:2}}>No Greater Love is a promise recorded in the Bible. Jesus said "Greater love has no one than this: to lay down one's life for one's friends" (John 15:13). What is amazing is that he said it, then he did it, and then he rose from the grave three days later to prove it! 
</p>
            </div>
            <div  className='col-md-6 d-flex justify-content-end'>
                <img style={{maxHeight:'200px'}}  src={require('../../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} />
            </div>
        </div>
        <div style={{marginTop:'40px',marginBottom:'28px'}}>
        <h2>What do you believe about Jesus?</h2>
        </div>
       
          <div style={{marginTop:'40px'}} className='row'>
            <div className='col-md-4'>
           
            <button style={{marginBottom:'20px'}}>
                          <input
                             type='checkbox'
                             checked={selectedOption === 'I have accepted Jesus as my Lord and Savior'}
                             value='I have accepted Jesus as my Lord and Savior'
                            onChange={() => handlecheck('I have accepted Jesus as my Lord and Savior')}
                             style={{marginRight:'12px'}}
                           />
                           <Link to={'/ihaveacceptedjesus'} target="_blank">I have accepted Jesus as my Lord and Savior</Link>
                           
            </button>
       
          </div>
          <div className='col-md-4'>
           
           <button style={{marginBottom:'20px'}}><input
                             type='checkbox'
                             value='I want to accept Jesus as my Lord and Savior'
                             onChange={() => handlecheck('I want to accept Jesus as my Lord and Savior')}
                             style={{marginRight:'12px'}}
                             checked={selectedOption === 'I want to accept Jesus as my Lord and Savior'}
                           /><Link to={'/iwanttoacceptjesus'}  target="_blank">I want to accept Jesus as my Lord and Savior</Link></button>
      
        </div>
        <div className='col-md-4'>
           
        <button style={{marginBottom:'20px'}}><input
                             type='checkbox'
                             value='I want to learn more about Jesus'
                             onChange={() => handlecheck('I want to learn more about Jesus')}
                             style={{marginRight:'12px'}}
                         
                           /><Link to={'/iwanttolearnaboutjesus'}  target="_blank">I want to learn more about Jesus</Link></button>
        </div>
         
          
          
        </div>
      
            <div id="gospel of john" style={{paddingTop: '120px',paddingTop:'40px'}}>
            <div  className='row'>
            <div className='col-md-6 d-flex align-items-center'>
            <p style={{lineHeight:2}}>The Gospel of John is an account of the words and deeds of Jesus Christ recorded by His friend, John. It may be the most important thing ever written, and you owe it to yourself to read it. 
</p>
            </div>
            <div  className='col-md-6 d-flex justify-content-end'>
                <img style={{maxHeight:'400px',width:'60%'}}  src={require('../../../assets/NGLV_images/No Greater Love Front.jpg')} />
            </div>
        </div>
</div>

<div style={{marginTop:'40px',marginBottom:'28px',alignItems:'center'}}>
  <div style={{ border: '1px solid grey', padding: '8px', borderRadius: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div>
        Do You Already have a Physical Copy ?
      </div>
      <div style={{ display: 'flex' }}>
        <label style={{ marginRight: '16px' }}>
          <input
            type="radio"
            value="yes"
            style={{marginRight:'6px'}}
            checked={selectedOption === 'yes'}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            style={{marginRight:'6px'}}
            checked={selectedOption === 'no'}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
    </div>
  </div>
</div>
{selectedOption === 'yes' ? 
        <div>
            <label style={{ textAlign: 'left', display: 'block', marginTop: '10px' }}>
    Where Do You Receive It?
</label>
<input
                       type={'text'}
                       value={comment}
                       onChange={(e) => setComment(e.target.value)}
                       style={{  display: 'block', borderRadius: '10px', width: '100%', height: '36px', borderColor: 'gray', borderWidth: 0.5, padding: 8,marginTop:'10px' }}
                     />
        </div> : null
    }
    {selectedOption === 'no' ? 
        <div>
          <p style={{textDecoration:'underline',cursor:'pointer'}}>If you want one, click below to request one</p>
        </div>
           : null
    }
<div style={{marginTop:'28px'}} className="testimonials-section">
      <h2 style={{ textAlign: 'left', display: 'block', marginTop: '10px' }}>Iam Statements</h2>
      <div style={{paddingTop:'40px'}} className="testimonial-list">
      <Carousel swipeable={true}  interval={8000} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id}>
          <img style={{width:'60%'}} src={testimonial.img}  />
          <p>{testimonial.quote}</p>
          <p>{testimonial.reference}</p>
        </div>
      ))}
    </Carousel>
      </div>
    </div>
       </div>
       
    {/* <div class="content-container">
        <img src="https://picsum.photos/800/400" alt="Placeholder Image" />
      <p>No Greater Love is a promise recorded in the Bible. Jesus said "Greater love has no one than this: to lay down one's life for one's friends" (John 15:13). What is amazing is that he said it, then he did it, and then he rose from the grave three days later to prove it!</p>
    </div> */}
  </section>
            </div>
            <div id="free tools">
            <Footer />
            </div>
           
        </>
    );
}

export default Home;