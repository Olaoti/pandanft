import React, { useState } from "react";

import NFTcard from "../components/NFTcard";
import { useEffect } from "react";

import nftimg1 from "../assets/images/NFTimages/nft.png";
import nftimg2 from "../assets/images/NFTimages/nft1.png";
import nftimg3 from "../assets/images/NFTimages/nft2.png";
import nftimg4 from "../assets/images/NFTimages/nft3.png";
import nftimg5 from "../assets/images/NFTimages/nft4.png";
import nftimg6 from "../assets/images/NFTimages/nft5.png";
import nftimg7 from "../assets/images/NFTimages/nft6.png";
import nftimg8 from "../assets/images/NFTimages/nft7.png";
import nftimg9 from "../assets/images/NFTimages/nft8.png";
import nftimg10 from "../assets/images/NFTimages/nft9.png";
import nftimg11 from "../assets/images/NFTimages/nft10.png";
import nftimg12 from "../assets/images/NFTimages/nft11.png";
import nftimg13 from "../assets/images/NFTimages/nft12.png";
import nftimg14 from "../assets/images/NFTimages/nft13.png";
import nftimg15 from "../assets/images/NFTimages/nft14.png";
/*import nftimg16 from "../assets/images/NFTimages/nft15.png";
import nftimg17 from "../assets/images/NFTimages/nft16.png";
*/
import person1 from "../assets/images/peopleimages/person1.png";
import person2 from "../assets/images/peopleimages/person2.png";
import person3 from "../assets/images/peopleimages/person3.png";
import person4 from "../assets/images/peopleimages/person4.png";
import person5 from "../assets/images/peopleimages/person5.png";
import person6 from "../assets/images/peopleimages/person6.png";
import person7 from "../assets/images/peopleimages/person7.png";
import person8 from "../assets/images/peopleimages/person8.png";
import person9 from "../assets/images/peopleimages/person9.png";
import person10 from "../assets/images/peopleimages/person10.png";
import person11 from "../assets/images/peopleimages/person11.png";
import person12 from "../assets/images/peopleimages/person12.png";
import person13 from "../assets/images/peopleimages/person13.png";
import person14 from "../assets/images/peopleimages/person14.png";

function Nftlist({ checkList, random, btnCheck }) {
  const lists = [
    {
      id: 1,
      nftima: nftimg1,
      nftname: "Hamlet kusa",
      timeleft: 24,
      manname: "Jamey Kel",
      manimg: person1,
      nftprice: 3.54,
      nftpos: "Hot",
      nftgenre: "virtual, videos",
      nftdesc:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      contact: "0x49cf...a28b",
      lastbid: 10.89,
    },
    {
      id: 2,
      nftima: nftimg2,
      nftname: "Gand pang",
      timeleft: 31,
      manname: " David Husha",
      manimg: person2,
      nftprice: 8.64,
      nftpos: "Hot",
      nftgenre: "arts, videos",
      nftdesc:
        "NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud",
      contact: "0b49cf...a988b",
      lastbid: 9.06,
    },
    {
      id: 3,
      nftima: nftimg3,
      nftname: "Godak blue",
      timeleft: 43,
      manname: "Chris Oi",
      manimg: person3,
      nftprice: 7.64,
      nftpos: "live",
      nftgenre: "arts, sports",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9o35cf...a988b",
      lastbid: 5.76,
    },
    {
      id: 4,
      nftima: nftimg4,
      nftname: "Jingolo",
      timeleft: 43,
      manname: "Maham Rols",
      manimg: person4,
      nftprice: 2.12,
      nftpos: "Hot",
      nftgenre: "music, arts, sports",
      nftdesc:
        "A non-fungible token (NFT) is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger. The ownership of an NFT ",
      contact: "9o9fg...a987d",
      lastbid: 1.8,
    },
    {
      id: 5,
      nftima: nftimg5,
      nftname: "Rohan",
      timeleft: 54,
      manname: "Ryan Mich",
      manimg: person5,
      nftprice: 7.98,
      nftpos: "live",
      nftgenre: "virtual, videos",
      nftdesc:
        "NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple terms ...",
      contact: "9o9fg...a987d",
      lastbid: 4.56,
    },
    {
      id: 6,
      nftima: nftimg6,
      nftname: "Cancola",
      timeleft: 43,
      manname: "Tom Berry",
      manimg: person6,
      nftprice: 4.53,
      nftpos: "live",
      nftgenre: "arts, music, sports",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 4.2,
    },
    {
      id: 7,
      nftima: nftimg7,
      nftname: "Tom Bar",
      timeleft: 28,
      manname: "Trim Carl",
      manimg: person7,
      nftprice: 2.45,
      nftpos: "Hot",
      nftgenre: "music, virtual, videos",
      nftdesc:
        "T means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple term",
      contact: "9287fg...a987d",
      lastbid: 6.4,
    },
    {
      id: 8,
      nftima: nftimg8,
      nftname: "Chrasyla",
      timeleft: 34,
      manname: "Loli Pump",
      manimg: person8,
      nftprice: 3.65,
      nftpos: "Hot",
      nftgenre: "arts, virtual, vidoes",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 2.9,
    },
    {
      id: 9,
      nftima: nftimg9,
      nftname: "Khronthyn",
      timeleft: 56,
      manname: "Anne Kel",
      manimg: person9,
      nftprice: 7.8,
      nftpos: "Hot",
      nftgenre: "music, sports, virtual",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 7.1,
    },
    {
      id: 10,
      nftima: nftimg10,
      nftname: "Krybtal",
      timeleft: 44,
      manname: "Koko Banks",
      manimg: person10,
      nftprice: 6.77,
      nftgenre: "videos, music",
      nftdesc:
        "T means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple term",
      contact: "9287fg...a987d",
      lastbid: 4.5,
    },
    {
      id: 11,
      nftima: nftimg11,
      nftname: "kobinat",
      timeleft: 23,
      manname: "Tall Frayo",
      manimg: person11,
      nftprice: 5.6,
      nftgenre: "sports, music",
      nftdesc:
        "T means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple term",
      contact: "9287fg...a987d",
      lastbid: 4.8,
    },
    {
      id: 12,
      nftima: nftimg12,
      nftname: "Cronbayot",
      timeleft: 32,
      manname: "Susanne Mar",
      manimg: person12,
      nftprice: 4.5,
      nftgenre: "arts, virtual",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 9.8,
    },
    {
      id: 13,
      nftima: nftimg13,
      nftname: "Lighter",
      timeleft: 43,
      manname: "Thronlyn Bay",
      manimg: person13,
      nftprice: 5.4,
      nftgenre: "sports, vidoes",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 4.1,
    },
    {
      id: 14,
      nftima: nftimg14,
      nftname: "Chronc",
      timeleft: 34,
      manname: "justin Rye",
      manimg: person14,
      nftprice: 9.6,
      nftgenre: "arts, videos, music",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 8.3,
    },
    {
      id: 15,
      nftima: nftimg15,
      nftname: "Broauth",
      timeleft: 22,
      manname: "Rodrib Mark",
      manimg: person6,
      nftprice: 14,
      nftgenre: "music, virtual, sports",
      nftdesc:
        "Top Shot is an NFT marketplace where basketball fans can buy, sell, and trade NBA moments. So far, the most expensive collectible traded is LeBron James dunking against the Houston Rockets, which was sold for over $387,000",
      contact: "9287fg...a987d",
      lastbid: 10.2,
    } /*{
    id:,
    nftima: nftimg1,
    nftname: "",
    timeleft: ,
    manname: ,
    manimg: person1,
    nftprice: ,
    nftpos: ,
    nftgenre: ,
    nftdesc: ,
    contact: ,
    lastbid: ,
  },*/,
  ];
  const [view, setView] = useState(true);
  const newLists = lists?.filter((list) => {
    return checkList && list.nftpos === checkList;
  });
  const randomNft = lists?.filter((list) => {
    return list.id === random;
  });
  const viewClick = () => {
    setView(!view);
  };
  const [selected, setSelected] = useState("");
  const [filterednft, setFilterednft] = useState();
  const filterClick = (e) => {
    setSelected(e.target.id);
  };
  useEffect(() => {
    setFilterednft(
      lists?.filter((list) => {
        return list.nftgenre.includes(selected);
      })
    );
  }, [selected]);

  /*click to show or hide sort by options*/
  const [showFilter, setShowFilter] = useState(false);
  const toggleClick = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };
  const hideFilter = () => {
    if (showFilter) {
      setShowFilter(false);
    }
  };

  return (
    <div onClick={hideFilter}>
      {checkList && <NFTcard nftlist={newLists} />}
      {random && <NFTcard nftlist={randomNft} />}
      {btnCheck ? (
        <div>
          <div className="flexbox">
            <div>
              <div className="btn" onClick={toggleClick}>
                Sort by :
              </div>
            </div>
            <div
              className={`flexbox ${showFilter ? "showfilter" : "hidefilter"}`}
              onClick={filterClick}
            >
              <div className="btn" id=" ">
                All
              </div>
              <div className="btn" id="arts">
                Arts
              </div>
              <div className="btn" id="sports">
                Sports
              </div>
              <div className="btn" id="music">
                Music
              </div>
              <div className="btn" id="virtual">
                Virtual
              </div>
              <div className="btn" id="videos">
                Videos
              </div>
            </div>
          </div>
          {view ? (
            <NFTcard nftlist={filterednft?.filter((list) => list.id <= 6)} />
          ) : (
            <NFTcard nftlist={filterednft} />
          )}
          <div className="btn view" onClick={viewClick}>
            {view ? "View More" : "View Less"}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nftlist;
