import React from "react";
import { Link } from "react-router-dom";
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
            <Link className="link" to="/discover">
              <div className="btn">View More</div>
            </Link>
          </div>
          <Auction />
        </div>
        <div className="home__products">
          <div className="flexbox">
            <div className="sub-heading">Featured Artists</div>
            <Link className="link" to="/discover">
              <div className="btn">View NFTs</div>
            </Link>
          </div>
          <Artists />
        </div>
        <div className="home__products">
          <div className="flexbox">
            <div className="sub-heading">Hot NFTs</div>
            <Link className="link" to="/discover">
              <div className="btn">View More</div>
            </Link>
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
