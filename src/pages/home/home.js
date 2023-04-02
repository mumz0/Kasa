import React from "react"
import Locations from "../../components/cards/cards"
import Banner from "../../components/banner/banner"
import BannerImg from "../../assets/images/banner.png"

function Home() {
  return (
    <div>
      <Banner image={BannerImg} text="Chez vous, partout et ailleurs"/>
      <Locations />
    </div>
  );
}

export default Home