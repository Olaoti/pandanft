import React from "react";
import Logo from "./Logo";

function Nav() {
  return (
    <div className="nav">
      <Logo />
      <div className="nav__links">
        <div>Home</div>
        <div>Discover</div>
        <div>Docs</div>
        <div>Blog</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="nav__btn">Connect wallet</div>
    </div>
  );
}

export default Nav;
