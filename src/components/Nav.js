import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <div className="nav">
      <Logo />
      <div className="nav__links">
        <Link className="link" to="/">
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
      </div>
      <div className="btn">Connect wallet</div>
    </div>
  );
}

export default Nav;
