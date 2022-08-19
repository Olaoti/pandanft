import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import nft from "../assets/images/NFTimages/nft.png";
import Timer from "../components/Timer";
import Productdescription from "../components/Productdescription";
import Productoffers from "../components/Productoffers";
import Producthistory from "../components/Producthistory";
import Auction from "../lists/components/Auction";
import person_img from "../assets/images/peopleimages/person9.png";
import creator_img from "../assets/images/peopleimages/person10.png";

function Product({ name }) {
  const [descriptionclick, setDescriptionClick] = useState(true);
  const [historyClick, setHistoryClick] = useState(false);
  const [offerClick, setOfferClick] = useState(false);
  const descriptionClicked = () => {
    setDescriptionClick(true);
    setHistoryClick(false);
    setOfferClick(false);
  };
  const offerClicked = () => {
    setHistoryClick(false);
    setDescriptionClick(false);
    setOfferClick(true);
  };
  const historyClicked = () => {
    setDescriptionClick(false);
    setHistoryClick(true);
    setOfferClick(false);
  };

  return (
    <div className="product">
      <Nav />
      <div className="product__box">
        <div className="product__box__nftimage">
          <div className="producttimer">
            <Timer timervalue="4:50:43:22" className="newtime" />
          </div>
          <img src={nft} className="productnftimg" alt="nft" />
        </div>
        <div className="product__box__desc">
          <div className="sub-heading">{name}#1119 Seagull</div>
          <div className="product__box__desc__details texts">
            The Birdhouse is a collection of 6000 birds, each with it's own
            unique traits & personality. See them all at TheBirdHouse.app
          </div>
          <div className="product__box__desc__bid">
            <div className="product__box__desc__bid__pricebid">
              <div className="texts">Price Bid</div>
              <div className="currentval">10.32 ETH</div>
            </div>
            <div className="product__box__desc__bid__lastbid">
              <div className="texts">Last Bid</div>
              <div className="currentval">7.34 ETH</div>
            </div>
          </div>
          <div className="product__box__desc__personsdetails">
            <div className="product__box__desc__personsdetails__person1">
              <img src={creator_img} alt="" />
              <div className="persondescription">
                <div className="texts">Creator</div>
                <div className="name">Sulidavi</div>
              </div>
            </div>
            <div className="product__box__desc__personsdetails__person2">
              <img src={person_img} alt="" />
              <div className="persondescription">
                <div className="texts">Owner</div>
                <div className="name">Crharony</div>
              </div>
            </div>
          </div>
          <div className="product__box__desc__buttons">
            <div className="btn">Purchase Now</div>
            <div className="button">Place a bid</div>
          </div>
        </div>
      </div>
      <div className="product__details">
        <div className="product__details__navbtns flexbox">
          <div
            className={descriptionclick ? "button" : "btn"}
            onClick={descriptionClicked}
          >
            Description
          </div>
          <div className={offerClick ? "button" : "btn"} onClick={offerClicked}>
            Offers
          </div>
          <div
            className={historyClick ? "button" : "btn"}
            onClick={historyClicked}
          >
            Price history
          </div>
        </div>
        {descriptionclick ? (
          <Productdescription className="description-toggle show" />
        ) : (
          ""
        )}
        {offerClick ? <Productoffers className="offer-toggle" /> : ""}
        {historyClick ? <Producthistory className="history-toggle" /> : ""}
      </div>
      <div className="othernfts">
        <div className="flexbox">
          <div className="sub-heading">Another NFTs</div>
          <div className="btn">View More</div>
        </div>
        <Auction />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
