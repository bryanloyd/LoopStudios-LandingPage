import React from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";

const HeaderComponent = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="LogoStudios" />
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

        <div className="menu-btn">
          <img src={menu} alt="" />
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
