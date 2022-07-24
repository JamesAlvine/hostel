import React from 'react'
import pic1 from "../../common/image/wm3.jpg";
import './About.css';

function AboutCard() {
  return (
    <>
    <div className='aboutCard mtop flex_space'>
      <div className='row row1'>
        <h4><u>About Us</u></h4>
        <h1>
          Are you a student looking for hostel accomodation?? <span> we have Solutions </span> for you!!
        </h1>
        <p>Patahostel is a leading online platform that makes your life easy, just click and search for your preffered hostel .</p>
        <p>We provide every hostel type that a student may need.</p>
        <button className='secondary-btn'>
          Explore More <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
      <div className='row image'>
        <img src={pic1} alt='' height= '400vh'  width='96.5%' />
        <div className='control-btn'>
          {/* <button className='prev'>
            <i className='fas fa-play'></i>
          </button> */}
        </div>
      </div>
    </div>
  </>
  )
}

export default AboutCard