import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import nft from "../assets/images/NFTimages/nft.png";

function Product() {
  return (
    <div className="product">
      <Nav />
      <div className="product__box">
        <div className="product__box__image">
          <img src={nft} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
