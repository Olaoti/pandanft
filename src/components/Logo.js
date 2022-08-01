import React from "react";
import logo from "../assets/icons/pandalogo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo__image" />
      <div className="logo__text">Panda NFT</div>
    </div>
  );
}

export default Logo;
