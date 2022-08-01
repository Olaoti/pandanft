import React from "react";
import guideimg from "../assets/icons/guideimg.png";

function Guide() {
  return (
    <div className="guide">
      <div className="sub-heading">
        Create and sell your <br />
        NFTs
      </div>
      <div className="guide__container">
        <div className="guide__card">
          <div className="guide__card__icon">
            <img src={guideimg} alt="" />
          </div>
          <div className="guide__card__head">Set up your wallet</div>
          <div className="guide__card__texts">
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </div>
        </div>
        <div className="guide__card">
          <div className="guide__card__icon">
            <img src={guideimg} alt="" />
          </div>
          <div className="guide__card__head">Add your NFTs</div>
          <div className="guide__card__texts">
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </div>
        </div>
        <div className="guide__card">
          <div className="guide__card__icon">
            <img src={guideimg} alt="" />
          </div>
          <div className="guide__card__head">List them for sale</div>
          <div className="guide__card__texts">
            Once you've set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
