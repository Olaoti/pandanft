import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__boxes">
        <div className="footer__boxes__desc">
          <Logo />
          <div className="texts">
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </div>
        </div>
        <div className="footer__boxes__desc">
          <div className="mini-head">Resources</div>
          <div className="texts"> Help Center</div>
          <div className="texts">Platform Status</div>
          <div className="texts">Partners</div>
          <div className="texts">Gas-Free Marketplace</div>
          <div className="texts">Blog</div>
        </div>
        <div className="footer__boxes__desc">
          <div className="mini-head">Company</div>
          <div className="texts">Our Team</div>
          <div className="texts">About US</div>
          <div className="texts">Contact Us</div>
          <div className="texts">Career</div>
        </div>
        <div className="footer__boxes__desc">
          <div className="mini-head">Contact</div>
          <div className="texts">2715 Ash Dr. San Jose, South Dakota 83475</div>
          <div className="footer__boxes__desc__socials">
            <div className="facebook"></div>
            <div className="twitter"></div>
            <div className="insta"></div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
      2021 All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
