import React from "react";
import Nav from "../components/Nav";
import Linebg from "../backgrounds/Linebg";
import HomeDescription from "../components/HomeDescription";
import HomeImages from "../components/HomeImages";
import Wallets from "../components/Wallets";
import Guide from "../components/Guide";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Linebg />
      <div className="home__section">
        <Nav />
        <div className="home__contents">
          <HomeDescription />
          <HomeImages />
        </div>
        <Wallets />
        <Guide />
        <JoinCommunity />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
