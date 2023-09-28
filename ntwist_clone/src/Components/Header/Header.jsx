import React, { useEffect } from "react";
import { useState } from "react";
import "./header.css"; // Import the external CSS file for styling
import { BsFillCaretDownFill } from 'react-icons/bs' // Import a dropdown caret icon from react-icons/bs
import { FaBars } from 'react-icons/fa' // Import a bars icon from react-icons/fa

const Header = () => {
  // State for menu toggle
  const [Toggle, showMenu] = useState(false);
console.log(Toggle)
  // State for changing header appearance on scrolling
  const [font, setFont] = useState("white");
  const [logo, setLogo] = useState('https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png')
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setnavColor("#FFFFFF"); // Change background color on scroll
      setFont("#003358"); // Change font color on scroll
      setLogo('https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png') // Change logo on scroll
    } else {
      setnavColor("transparent");
      setFont("white");
      setLogo('https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png')
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  // Add a scroll event listener to change header appearance on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header
      className="header"
      style={{ backgroundColor: navColor, color: font }}
    >
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt=""  />
        </a>
        <div
          style={{
            width: '600px'
          }}
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            {/* Navigation options */}
          <ul className="nav__list">
            <li className="nav__item">
              HOME
            </li>
            <li className="nav__item dropdown dropbtn">
              INDUSTRIES <BsFillCaretDownFill />
              {/* Dropdown will be visible over hovering */}
              <div class="dropdown-content">
                <a href="">Sustainability</a>
                <a href="">Mineral processing</a>
                <a href="">Mine-To-Mill-To-Mine Optimization</a>
                <a href="">Oil & Gas</a>
              </div>
            </li>
            <li className="nav__item">
              AI SOFTWARE
            </li>
            <li className="nav__item">
              BLOG
            </li>
            <li className="nav__item">
              CONTACT US
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        {/* Toggle bar for small size screen */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header; // Export the Header component as the default export