import React from "react";
import fireicon from "../assets/icons/fire.png";

function NFTcard({ nftlist }) {
  return (
    <div className="card">
      {nftlist.map((nft) => {
        return (
          <div className="nftcard" key={nft.id}>
            <div className="nftcard__top">
              <div className="nftcard__top__image">
                <div className="place-bid">
                  <div className="button">Place a Bid</div>
                </div>
                <img src={nft.nftima} alt="" className="img" />
                <div className="nftcard__top__timer">
                  <span className="icon">
                    <img src={fireicon} alt="" />
                  </span>{" "}
                  <span>05 : 12 : 47 : 45</span>
                </div>
              </div>
            </div>
            <div className="nftcard__bottom">
              <div className="nftcard__bottom__info">
                <div className="nftcard__bottom__info__name">{nft.nftname}</div>
                <div className="nftcard__bottom__info__tag">BSC</div>
              </div>
              <div className="nftcard__bottom__personal">
                <div className="nftcard__bottom__personal__img">
                  <img src={nft.manimg} alt="" />
                </div>
                <div className="nftcard__bottom__personal__info">
                  <div className="smtext">Creator</div>
                  <div className="person-name">{nft.manname}</div>
                </div>
                <div className="nftcard__bottom__personal__nftinfo">
                  <div className="smtext">Current bid</div>
                  <div className="nft-price">{nft.nftprice}ETH</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NFTcard;
