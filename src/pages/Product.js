import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import Productdescription from "../components/Productdescription";
import Productoffers from "../components/Productoffers";
import Producthistory from "../components/Producthistory";
import Auction from "../lists/components/Auction";
import creator_img from "../assets/images/peopleimages/person10.png";

import Newlist from "../lists/Newlist";

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

  const [number, setNumber] = useState(0);

  const location = useLocation();
  const { nftid } = location.state ? location.state : 0;
  useEffect(() => {
    if (nftid <= Newlist.length || nftid === 0) {
      setNumber(nftid);
    } else {
      setNumber(0);
    }
  }, [nftid]);

  return (
    <div className="product" id="#">
      <Nav />
      <div className="product__box">
        <div className="product__box__nftimage">
          <div className="producttimer">
            <Timer timervalue="4:50:43:22" className="newtime" />
          </div>
          <img
            src={Newlist[number]?.nftima}
            className="productnftimg"
            alt="nft"
          />
        </div>
        <div className="product__box__desc">
          <div className="sub-heading">{Newlist[number]?.nftname}</div>
          <div className="product__box__desc__details texts">
            {Newlist[number]?.nftdesc}
          </div>
          <div className="product__box__desc__bid">
            <div className="product__box__desc__bid__pricebid">
              <div className="texts">Price Bid</div>
              <div className="currentval">{Newlist[number]?.nftprice} ETH</div>
            </div>
            <div className="product__box__desc__bid__lastbid">
              <div className="texts">Last Bid</div>
              <div className="currentval">{Newlist[number]?.lastbid} ETH</div>
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
              <img src={Newlist[number]?.manimg} alt="" />
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
        {offerClick ? (
          <Productoffers newno={number} className="offer-toggle" />
        ) : (
          ""
        )}
        {historyClick ? <Producthistory className="history-toggle" /> : ""}
      </div>
      <div className="othernfts">
        <div className="flexbox">
          <div className="sub-heading">Another NFTs</div>
          <Link className="link" to="/discover">
            <div className="btn">View More</div>
          </Link>
        </div>
        <Auction />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
