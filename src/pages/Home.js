import React from "react";
import Nav from "../components/Nav";
import Linebg from "../backgrounds/Linebg";

function Home() {
  return (
    <div className="home">
      <Linebg />
      <div className="home__section">
        <Nav />
      </div>
    </div>
  );
}

export default Home;
