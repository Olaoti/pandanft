import React from "react";
import Nftlist from "../Nftlist";

function Auction() {
  return (
    <div className="auctioncards">
      <Nftlist checkList={"live"} />
    </div>
  );
}
export default Auction;
