import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  const navRef = useRef(null);
  const [navBg, setNavBg] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menuClick, setClick] = useState(false);
  const checkClick = () => {
    if (menuClick === true) {
      setClick(false);
    } else if (menuClick === false) {
      setClick(true);
      setNavBg(true);
    }
  };
  return (
    <div className={`nav ${navBg && "navBg"}`} ref={navRef}>
      <div className={`mobile-nav ${navBg && "mobilebg"}`}>
        <div className="logo">
          <Logo />
        </div>
        <div
          className={`menu ${menuClick ? "close" : "show"}`}
          onClick={checkClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav__links ${menuClick ? "visible" : "hide"}`}>
        <Link className="link" to="*">
          <div>Home</div>
        </Link>
        <Link className="link" to="discover">
          <div>Discover</div>
        </Link>
        <Link className="link" to="product">
          <div>Docs</div>
        </Link>
        <div>Blog</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div className="btn phone">Connect wallet</div>
      </div>
      <div className="desktop btn">Connect wallet</div>
    </div>
  );
}

export default Nav;
