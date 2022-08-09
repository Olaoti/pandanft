import React from "react";

function Productdescription() {
  return (
    <div className="productdescription">
      <div className="texts">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="productdescription__info">
        <div className="texts bold">Contract Address</div>
        <div className="texts">0x49cf...a28b</div>
      </div>
      <div className="productdescription__info">
        <div className="texts bold">Token ID</div>
        <div className="texts">4133</div>
      </div>
      <div className="productdescription__info">
        <div className="texts bold">Token Standard</div>
        <div className="texts">ERC-721</div>
      </div>
      <div className="productdescription__info">
        <div className="texts bold">Blockchain</div>
        <div className="texts">Ethereum</div>
      </div>
    </div>
  );
}

export default Productdescription;
