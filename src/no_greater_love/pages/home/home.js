import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import Footer from '../../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import NGLVHeader from '../../components/header';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const testimonialsData = [
  {
    id: 1,
    quote: "I am the bread of life",
    img: require('../../../assets/NGLV_images/1.jpg'),
    reference: "John 6:36",
  },
  {
    id: 2,
    quote: "I am the light of the world",
    img: require('../../../assets/NGLV_images/2.jpg'),
    reference: "John 8:12",
  },
  {
    id: 3,
    quote: "I am the gate for the sheep",
    img: require('../../../assets/NGLV_images/3.jpg'),
    reference: "John 10:7",
  },
  {
    id: 4,
    quote: "I am the good shepherd",
    img: require('../../../assets/NGLV_images/4.jpg'),
    reference: "John 10:11",
  }, {
    id: 5,
    quote: "I am the resurrection and the life",
    img: require('../../../assets/NGLV_images/5.jpg'),
    reference: "John 11:25",
  },
  {
    id: 6,
    quote: "I am the way and the truth and the life",
    img: require('../../../assets/NGLV_images/6.jpg'),
    reference: "John 14:6",
  }, {
    id: 7,
    quote: "I am the true vine",
    img: require('../../../assets/NGLV_images/7.jpg'),
    reference: "John 15:1",
  }
];
const Home = () => {
  let navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('');
  const [showInputField, setShowInputField] = useState(false);
  const [comment, setComment] = useState('');
  const [homelink, setHomeLink] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInputField(event.target.value === 'yes');
  };
  const handlecheck = (item) => {
    setSelectedOption(item)
    if (item === 'I have accepted Jesus as my Lord and Savior') {
      navigate('/ihaveacceptedjesus')
      // window.open('/ihaveacceptedjesus','_blank')
    } else if (item === 'I want to accept Jesus as my Lord and Savior') {
      navigate('/iwanttoacceptjesus')
      // window.open('/iwanttoacceptjesus','_blank')
    } else if (item === 'I want to learn more about Jesus') {
      navigate('/iwanttolearnaboutjesus')
      // window.open('/iwanttolearnaboutjesus','_blank')
    }

  }

  const clearpadd = (item) => {
    setHomeLink(item)
  }
  const handlePrevSlide = () => {
    console.log(currentIndex, 'currentIndex');
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Wrap around to the last slide if at the first slide
      setCurrentIndex(testimonialsData.length - 1);
    }
  };

  const handleNextSlide = () => {
    console.log(currentIndex, 'currentIndex');
    if (currentIndex < testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Wrap around to the first slide if at the last slide
      setCurrentIndex(0);
    }
  };
  return (
    <>
      <NGLVHeader clearpadd={clearpadd} />
      <div >
        <div className='home'>



          <section id="intro" class="content-section section-to-scroll">
            <div >
              <img src={require('../../../assets/NGLV_images/Nairobi City Park.jpg')} style={{ width: '100%', height: '350px' }} />
            </div>
            <div style={{ paddingTop: homelink ? '120px' : '0px' }} id="home" className='container-fluid content'>

              <div  >
                <div >
                  <p style={{ lineHeight: 2, fontSize: '16px' }}>No Greater Love is a promise recorded in the Bible. Jesus said "Greater love has no one than this: to lay down one's life for one's friends" (John 15:13). What is amazing is that he said it, then he did it, and then he rose from the grave three days later to prove it!
                  </p>
                </div>

              </div>
              <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <h5>What do you believe about Jesus?</h5>
              </div>
              <div className='row'>
                <div style={{textAlign:'left'}} className='col-md-6'>
                  <div style={{ marginTop: '20px', }}>
                    <button style={{ marginBottom: '20px',fontSize:'14px' }}>
                      <input
                        type='checkbox'
                        checked={selectedOption === 'I have accepted Jesus as my Lord and Savior'}
                        value='I have accepted Jesus as my Lord and Savior'
                        onChange={() => handlecheck('I have accepted Jesus as my Lord and Savior')}
                        style={{ marginRight: '12px' }}
                      />
                      <Link to={'/ihaveacceptedjesus'} >I have accepted Jesus as my Lord and Savior</Link>
                    </button>
                    <button style={{ marginBottom: '20px',fontSize:'14px' }}><input
                      type='checkbox'
                      value='I want to accept Jesus as my Lord and Savior'
                      onChange={() => handlecheck('I want to accept Jesus as my Lord and Savior')}
                      style={{ marginRight: '12px' }}
                      checked={selectedOption === 'I want to accept Jesus as my Lord and Savior'}
                    /><Link to={'/iwanttoacceptjesus'}  >I want to accept Jesus as my Lord and Savior</Link></button>
                    <button style={{ marginBottom: '20px',width:'358px',textAlign:'left',fontSize:'14px' }}><input
                      type='checkbox'
                      value='I want to learn more about Jesus'
                      onChange={() => handlecheck('I want to learn more about Jesus')}
                      style={{ marginRight: '12px',textAlign:'left' }}

                    /><Link to={'/iwanttolearnaboutjesus'}>I want to learn more about Jesus</Link></button>
                  </div>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  <img style={{ maxHeight: '200px' }} src={require('../../../assets/NGLV_images/No Greater Love Logo Small Transparent.png')} />
                </div>
              </div>


              <div id="gospel of john" style={{ paddingTop: '120px', paddingTop: '40px' }}>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    <p style={{ lineHeight: 2 }}>The Gospel of John is an account of the words and deeds of Jesus Christ recorded by His friend, John. It may be the most important thing ever written, and you owe it to yourself to read it.
                    </p>
                  </div>
                  <div className='col-md-6 d-flex justify-content-end'>
                    <img style={{ maxHeight: '300px', width: '40%' }} src={require('../../../assets/NGLV_images/No Greater Love Front.jpg')} />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '40px', marginBottom: '28px', alignItems: 'center' }}>
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
                          style={{ marginRight: '6px' }}
                          checked={selectedOption === 'yes'}
                          onChange={handleOptionChange}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="no"
                          style={{ marginRight: '6px' }}
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
                    Where Did You Receive It?
                  </label>
                  <input
                    type={'text'}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ display: 'block', borderRadius: '10px', width: '100%', height: '36px', borderColor: 'gray', borderWidth: 0.5, padding: 8, marginTop: '10px' }}
                  />
                </div> : null
              }
              {selectedOption === 'no' ?
                <div>
                  <ScrollLink
                    style={{ color: 'white', cursor: 'pointer' }}
                    to={'free tools'}
                    smooth={true}
                    duration={500}
                  >
                    <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>If you want one, click below to request one</p>
                  </ScrollLink>

                </div>
                : null
              }
              <div style={{ marginTop: '28px', paddingBottom: '220px' }} className="testimonials-section">
                <h2 style={{ textAlign: 'left', display: 'block', marginTop: '10px' }}>I am Statements</h2>
                <div style={{ paddingTop: '10px' }} className="testimonial-list">

                  <Carousel selectedItem={currentIndex} showArrows={true} swipeable={true} interval={8000} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false} renderArrowPrev={(hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={() => handlePrevSlide()}
                        title={label}
                        style={{
                          position: 'absolute',
                          zIndex: 99999,
                          top: '50%',
                          left: '2%',
                          width: '40px',
                          height: '40px',
                          transform: 'translateY(-50%)',
                          background: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '6px',
                          borderRadius: '100%',
                        }}
                      >
                        <FaChevronLeft />
                      </button>
                    )
                  }
                    renderArrowNext={(hasNext, label) =>
                      hasNext && (
                        <button
                          type="button"
                          onClick={() => handleNextSlide()}
                          title={label}
                          style={{
                            position: 'absolute',
                            zIndex: 99999,
                            top: '50%',
                            right: '2%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            padding: '6px',
                            borderRadius: '50%',
                          }}
                        >
                          <FaChevronRight />
                        </button>
                      )
                    }>
                    {testimonialsData.map((testimonial) => (
                      <div key={testimonial.id}>
                        <img style={{ height: '460px' }} src={testimonial.img} />

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


        <div style={{ position: 'fixed', bottom: 0, width: '100%',  }} id="free tools">
          <Footer />

        </div>
      </div>

    </>
  );
}

export default Home;