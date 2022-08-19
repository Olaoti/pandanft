import React from "react";
import Nftlist from "../Nftlist";

function Auction() {
  return (
    <div className="nft-section">
      <Nftlist checkList={"live"} />
    </div>
  );
}
export default Auction;
