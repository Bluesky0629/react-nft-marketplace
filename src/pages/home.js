import React, { Fragment } from "react";
import IntroCarousel from '../components/carousel';
import Lanchpad_carousel from "../components/lanchpad_carousel";
import PopularList from "../components/popularList";
import Footer from "../components/footer";
import TrendItem from "../components/trendItem";

export default () => {
  return (
    <>
      <div className="home-content">
        <div className="home-body container-fluid">
          <IntroCarousel />
          <TrendItem />
          <PopularList />
          <Lanchpad_carousel />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}



