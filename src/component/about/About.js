import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import pic2 from "../../common/image/about-img-1.jpg";
import Headtitle from "../../common/headtitle/Headtitle";

function About() {
  return (
    <>
      <Headtitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>
      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our
              <span>
                <u> Features </u>
              </span>
            </h1>
            <p>
              Patahostel provides give you the best ultimate choice where you can choose your desired hostel and it location.
            </p>
            <p>
              we provide all types of hostel accomodation services,2 sharing, 3 sharing e.t.c
            </p>
            <button className="secondary-btn">
              Explore More <i className="fas fa-long-arrow-alt-right"> </i>
            </button>
          </div>
          <div className="row image">
            <img src={pic2} alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"> </i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
