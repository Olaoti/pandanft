import React from "react";
import img1 from "../assets/images/peopleimages/person1.png";
import img2 from "../assets/images/peopleimages/person2.png";
import img3 from "../assets/images/peopleimages/person3.png";
import img4 from "../assets/images/peopleimages/person4.png";
import img5 from "../assets/images/peopleimages/person5.png";
import img6 from "../assets/images/peopleimages/person6.png";
import img7 from "../assets/images/peopleimages/person7.png";
import img8 from "../assets/images/peopleimages/person8.png";

function Productoffers() {
  const offerList = [
    {
      id: 1,
      offerimg: img1,
      offerName: "Chris Brown",
      offerPrice: 4.67,
      offerTime: "7hours ago",
    },
    {
      id: 2,
      offerimg: img2,
      offerName: "James Steph",
      offerPrice: 3.2,
      offerTime: "4hours ago",
    },
    {
      id: 3,
      offerimg: img3,
      offerName: "Lolly Kelvin",
      offerPrice: 8.6,
      offerTime: "5hours ago",
    },
    {
      id: 4,
      offerimg: img4,
      offerName: "Isholl Bang",
      offerPrice: 3.25,
      offerTime: "8hours ago",
    },
    {
      id: 5,
      offerimg: img5,
      offerName: "Anne Hush",
      offerPrice: 2.23,
      offerTime: "9hours ago",
    },
    {
      id: 6,
      offerimg: img6,
      offerName: "Joh Doesil",
      offerPrice: 4.8,
      offerTime: "19hours ago",
    },
    {
      id: 7,
      offerimg: img7,
      offerName: "Tanza Brow",
      offerPrice: 5.64,
      offerTime: "12hours ago",
    },
    {
      id: 8,
      offerimg: img8,
      offerName: "Kun Niphal",
      offerPrice: 7.6,
      offerTime: "6hours ago",
    },
  ];
  return (
    <div className="productoffers">
      {offerList.map((offer) => {
        return (
          <div className="offer" key={offer.id}>
            <div className="offer__image">
              <img src={offer.offerimg} alt=""/>
            </div>
            <div className="offer__details">
              <div>
                <span className="texts">{offer.offerName}</span>
                <span className="lighttext"> place a bid</span>
              </div>
              <div className="offer__details__time lighttext">
                {offer.offerTime}
              </div>
            </div>
            <div className="offer__nftdetails">
              <div className="texts">{offer.offerPrice} ETH</div>
              <div className="offer__nftdetails__dollarprice lighttext">
                =$ {offer.offerPrice * 1750}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Productoffers;
