import React from "react";
import NFTcard from "../../components/NFTcard";

function Auctions({ nftlist }) {
  return (
    <div>
      <NFTcard nftlist={nftlist} />
    </div>
  );
}

export default Auctions;
