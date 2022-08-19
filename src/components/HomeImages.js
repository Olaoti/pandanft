import React from "react";
import HomeNft from "../lists/components/HomeNft";
import nftimg1 from "../assets/images/NFTimages/nft.png";
import Timer from "./Timer";

function HomeImages() {
  return (
    <div className="homeImages">
      <div className="homeImages__content">
        <HomeNft />
        <div className="nftimage">
          <img src={nftimg1} alt="" className="img" />
          <Timer timervalue="05 : 15 : 47 : 45" />
        </div>
      </div>
    </div>
  );
}

export default HomeImages;
