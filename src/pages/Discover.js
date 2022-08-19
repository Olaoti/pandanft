import React from "react";
import Nav from "../components/Nav";
//import NFTcard from "../components/NFTcard";
//import Auctions from "../lists/components/Auctions";
import Footer from "../components/Footer";
import MainNft from "../lists/components/MainNft";

function Discover() {
  return (
    <div className="discover">
      <Nav />
      <div className="sub-heading">Explore Collectibles</div>
      <div className="searchbox">
        <input type="text" placeholder="type your keywords" />
        <span className="search">O</span>
      </div>
     
      <MainNft/>
      <Footer />
    </div>
  );
}

export default Discover;
