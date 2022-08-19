import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Timer from "./Timer";

function NFTcard({ nftlist }) {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="card">
            {nftlist?.map((nft) => {
              return (
                <div className="nftcard" key={nft.id}>
                  <div className="nftcard__top">
                    <div className="nftcard__top__nftimage">
                      <div className="place-bid">
                        <Link className="link" to="product">
                          <div className="button">Place a Bid</div>
                        </Link>
                      </div>
                      <img src={nft.nftima} alt="" className="img" />
                      <Timer timervalue="05 : 15 : 47 : 45" />
                    </div>
                  </div>
                  <div className="nftcard__bottom">
                    <div className="nftcard__bottom__info">
                      <div className="nftcard__bottom__info__name">
                        {nft.nftname}
                      </div>
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
        }
      />
      <Route path="product" element={<Product />} />
    </Routes>
  );
}

export default NFTcard;
