import React from "react";
import Nftlist from "../Nftlist";

function HomeNft() {
  const random = Math.round(Math.random() * 8) + 1;
  console.log(random);
  return (
    <div className="homeNft">
      <Nftlist random={random} />
    </div>
  );
}

export default HomeNft;
