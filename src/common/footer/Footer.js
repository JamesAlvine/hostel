import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>ABOUT US</h2>
            <p>
              Patahostel is a platform where it concerns the welfare of
              students, mentally,finanshially and physically as its focus is to
              assist students.
            </p>
            <br />
            <p>
              We make is easy for students to get their preffered hostel
              easisest way possible.
            </p>
            <div className="icon flex_space">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <div className="box">
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>
                  The Technical University of Kenya is expecting freshers to
                  join them this month.
                </p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 July 2022</span>
              </li>
              <li>
                <p>
                  Qwetu hostel has annouced that it has 3% discount for students
                  who shall have booked earlier.
                </p>
                <label className="fa fa-calendar-alt"></label>
                <span>04 July 2022</span>
              </li>
              <li>
                <p>How to choose hostel without regretting!</p>
                <label className="fa fa-calendar-alt"></label>
                <span>08 July 2020</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>NEWSLETTER</h2>
            <p>Patahostel provides news-letter that you make like.</p>

            <input type="text" name="" id="" />
            <input type="text" className="primary-btn" value="SUBSCRIBE" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
