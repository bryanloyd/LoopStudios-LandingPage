import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>
        <div className="social">
          <ul>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={pinterest} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>

        <div>
          <p>&copy; 2021 LoopStudios. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
