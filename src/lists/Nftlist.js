import React from "react";
import nftimg1 from "../assets/images/NFTimages/nft.png";
import nftimg2 from "../assets/images/NFTimages/nft1.png";
import nftimg3 from "../assets/images/NFTimages/nft2.png";
import nftimg4 from "../assets/images/NFTimages/nft3.png";
import nftimg5 from "../assets/images/NFTimages/nft4.png";
import nftimg6 from "../assets/images/NFTimages/nft5.png";
import nftimg7 from "../assets/images/NFTimages/nft6.png";

import person1 from "../assets/images/peopleimages/person1.png";
import person2 from "../assets/images/peopleimages/person2.png";
import person3 from "../assets/images/peopleimages/person3.png";
import person4 from "../assets/images/peopleimages/person4.png";
import person5 from "../assets/images/peopleimages/person5.png";
import person6 from "../assets/images/peopleimages/person6.png";
import person7 from "../assets/images/peopleimages/person7.png";
/*import person8 from "../assets/images/peopleimages/person8.png"
import person9 from "../assets/images/peopleimages/person9.png"
import person10 from "../assets/images/peopleimages/person10.png"*/

import Auctions from "./components/Auctions";
//import NFTcard from "../components/NFTcard";

function HotNFT() {
  const list = [
    {
      id: 1,
      nftima: nftimg1,
      nftname: "Hamlet kusa",
      timeleft: 24,
      manname: "John Smith",
      manimg: person1,
      nftprice: 3.54,
      nftpos: "Hot",
      nftgenre: "music, virtual, videos",
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
      manname: " David Richh",
      manimg: person2,
      nftprice: 8.64,
      nftpos: "Hot",
      nftgenre: "art, sports, videos",
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
      manname: "Christopherah",
      manimg: person3,
      nftprice: 7.64,
      nftpos: "live",
      nftgenre: "art, sports, virtual",
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
      nftgenre: "music, art, sports",
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
      nftgenre: "sports, virtual, videos",
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
      tokenid: ,
      tokenstnd: ,
      lastbid: ,
    },*/,
  ];
  /*var hotlist = list.filter((newlist) => {
    return newlist.nftpos === "Hot";
  });
  var livelist = list.filter((newlivelist) => {
    return newlivelist.nftpos === "live";
  });*/
  return (
    <div className="nftlist">
      <Auctions nftlist={list} />
    </div>
  );
}

export default HotNFT;
