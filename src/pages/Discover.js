import React from "react";
import Nav from "../components/Nav";
//import NFTcard from "../components/NFTcard";
//import Auctions from "../lists/components/Auctions";
import Nftlist from "../lists/Nftlist";
import Footer from "../components/Footer";

function Discover() {
  return (
    <div className="discover">
      <Nav />
      <div className="sub-heading">Explore Collectibles</div>
      <div className="searchbox">
        <input type="text" placeholder="type your keywords" />
        <span className="search">O</span>
      </div>
      <Nftlist />
      <Footer />
    </div>
  );
}

export default Discover;
