import React from 'react'
import pic1 from "../../common/image/wm2.jpg";
import './About.css';

function AboutCard() {
  return (
    <>
   <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4><u>About Us</u></h4>
          <h1>
            Looking for hostel ?? <span>we provide </span> solutions for you!!
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src={pic1} alt=''  />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard