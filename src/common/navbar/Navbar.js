import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../image/logo1.jpg";
import React, { useState } from "react"


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click ? "fa-solid fa-clock-rotate-left" : " fa-solid fa-bars"
              }
            ></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery{" "}
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog{" "}
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Testimonial{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="fa-solid fa-chevron-right"></i>Sign in
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fa-solid fa-chevron-right"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Become Hostel agent</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src={logo} alt="" height={120} />
          </div>

          <div className="contact flex_space ">
            <div className="box flex_space">
              <div className="icons">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4 onClick={()=>{
                  window.location("./Navbar.js")
                }}>Call Us</h4>
                <Link to="/contact">079700960</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@patahostel.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
