import React from "react";
import artist1 from "../../assets/images/artistimages/artist1.png";
import artist2 from "../../assets/images/artistimages/artist2.png";
import artist3 from "../../assets/images/artistimages/artist3.png";
import artist4 from "../../assets/images/artistimages/artist4.png";
import artistlogo1 from "../../assets/images/artistimages/artistlogo1.png";
import artistlogo2 from "../../assets/images/artistimages/artistlogo2.png";
import artistlogo3 from "../../assets/images/artistimages/artistlogo3.png";
import artistlogo4 from "../../assets/images/artistimages/artistlogo4.png";

function Artists() {
  const artistList = [
    {
      id: 1,
      name: "CryptoPunks",
      artistimg: artist1,
      artistlogo: artistlogo1,
      number: 816.7,
    },
    {
      id: 2,
      name: "Doodles",
      artistimg: artist2,
      artistlogo: artistlogo2,
      number: 74.3,
    },
    {
      id: 3,
      name: "Bored Ape Yacht",
      artistimg: artist3,
      artistlogo: artistlogo3,
      number: 378.7,
    },
    {
      id: 4,
      name: "Capsule House",
      artistimg: artist4,
      artistlogo: artistlogo4,
      number: 19.8,
    },
  ];
  return (
    <div className="artists">
      {artistList?.map((list) => {
        return (
          <div className="artist" key={list.id}>
            <div className="artist__img">
              <img className="artistimg" src={list.artistimg} alt="" />
            </div>
            <div className="artist__logo">
              <img src={list.artistlogo} alt="" />
            </div>
            <div className="artist__name">{list.name}</div>
            <div className="artist__number">{list.number}K</div>
          </div>
        );
      })}
    </div>
  );
}

export default Artists;
