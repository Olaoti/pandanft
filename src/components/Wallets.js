import React from "react";
import binance from "../assets/icons/binance.png";
import trustwallet from "../assets/icons/trustwallet.svg";
import metamask from "../assets/icons/metamask.svg";
import coinbase from "../assets/icons/coinbase.png";
import tcrypto from "../assets/icons/tcyrpto.svg";

function Wallets() {
  return (
    <div className="wallet">
      <div>
        <img src={binance} alt="" />
      </div>
      <div>
        {" "}
        <img src={trustwallet} alt="" />
      </div>
      <div>
        {" "}
        <img src={metamask} alt="" />
      </div>
      <div>
        {" "}
        <img src={coinbase} alt="" />
      </div>
      <div>
        {" "}
        <img src={tcrypto} alt="" />
      </div>
    </div>
  );
}

export default Wallets;
