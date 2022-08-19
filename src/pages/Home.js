import React from "react";
import Nav from "../components/Nav";
import Linebg from "../backgrounds/Linebg";
import Blurbg from "../backgrounds/Blurbg";
import HomeDescription from "../components/HomeDescription";
import HomeImages from "../components/HomeImages";
import Wallets from "../components/Wallets";
import Guide from "../components/Guide";
import Auction from "../lists/components/Auction";
import Artists from "../lists/components/Artists";
import HotNft from "../lists/components/HotNft";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Linebg />
      <Blurbg />
      <div className="home__section">
        <Nav />
        <div className="home__contents">
          <HomeDescription />
          <HomeImages />
        </div>
        <Wallets />
        <Guide />
        <div className="home__products">
          <div className="flexbox">
            <div className="sub-heading">Live Auctions</div>
            <div className="btn">View More</div>
          </div>
          <Auction />
        </div>
        <div className="home__products">
          <div className="flexbox">
            <div className="sub-heading">Featured Artists</div>
            <div className="btn">View NFTs</div>
          </div>
          <Artists />
        </div>
        <div className="home__products">
          <div className="flexbox">
            <div className="sub-heading">Hot NFTs</div>
            <div className="btn">View More</div>
          </div>
          <HotNft />
        </div>
        <JoinCommunity />
        <Footer className="homeFooter" />
      </div>
    </div>
  );
}

export default Home;
