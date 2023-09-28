import React, { useEffect } from "react";
import { useState } from "react";
import "./header.css";
import { BsFillCaretDownFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [font, setFont] = useState("white");
  const [logo, setLogo] = useState('https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png')
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    // if (window.scrollY > 50) {
    //   setnavColor("#FFFFFF");
    //   setFont("#003358");
    //   setLogo('https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png')
    // } else {
    //   setnavColor("transparent");
    //   setFont("white");
    //   setLogo('https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png')
    // }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, []);

  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   if (this.scrollY >= 80) header.classList.add("scroll-header");
  //   else header.classList.remove("scroll-header");
  // });

  return (
    <header
      className="header"
      style={{ backgroundColor: 'transparent', color: font }}
    >
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="" width="18%" />
        </a>
        <div
          style={{
            width: '600px'
          }}
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              HOME
            </li>
            <li className="nav__item">
              INDUSTRIES
            </li>
            <li className="nav__item">
              AI SOFTWARE <BsFillCaretDownFill />
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
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
