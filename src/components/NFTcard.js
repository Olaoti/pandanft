import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function NFTcard({ nftlist }) {
  const [link, setLink] = useState();

  useEffect(() => {
    setLink(window.location.pathname);
  }, [link]);
  return (
    <div className="card">
      {nftlist?.map((nft) => {
        return (
          <div className="nftcard" key={nft.id}>
            <div className="nftcard__top">
              <div className="nftcard__top__nftimage">
                <div className="place-bid">
                  {link?.includes("product") ? (
                    <Link
                      className="link"
                      to={{}}
                      state={{ nftid: nft.id - 1 }}

>
                      <div className="button">Place a Bid</div>
                    </Link>
                  ) : (
                    <Link
                      className="link"
                      to="/product"
                      state={{ nftid: nft.id - 1 }}
                    >
                      <div className="button">Place a Bid</div>
                    </Link>
                  )}
                </div>
                <img src={nft.nftima} alt="" className="img" />
                <Timer timervalue="05 : 15 : 47 : 45" />
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
                  <div className="nft-price">{nft.nftprice} ETH</div>
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
