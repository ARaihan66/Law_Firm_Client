import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="hidden lg:flex justify-evenly p-3 header-shadow">
      <a href="tel:+8801911382094" target="blank">
        <div className="flex items-center mt-3">
          <FaPhoneAlt className="mr-2 mt-1 header-icon" />
          <p className="header-p">Get Free Advice +88 01911-382094</p>
        </div>
      </a>

      {/*<div className="flex items-center justify-center">
        <FaClock className="mr-2 header-icon" />
          <p className="header-p">
            Saturday to Thursday 09 AM - 02 PM and 06 PM - 09 PM
          </p>
      </div>*/}
      <div className="flex items-center">
        <FaEnvelope className="mr-2 header-icon" />
        <a className="header-p" href={`mailto:rasmul@gmail.com`}>
          rasmul@gmail.com
        </a>
        .
      </div>
      <div>
        <Link to="/contact">
          <button className="header-btn">Lets Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
