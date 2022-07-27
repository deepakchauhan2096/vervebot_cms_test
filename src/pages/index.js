import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Feature from '../assets/components/feature/Feature';
import Header from "../assets/components/header/header";
import Main from '../assets/components/main/Main';
import TrendingNews from '../assets/components/trendingNews/trendingNews';
import Trendingnow from '../assets/components/trendingNow/Trendingnow';
import "../assets/style/global.css"
import Business from "../assets/components/business/Business";
import Footer from "../assets/components/footer/Footer";
import Haveidea from "../assets/components/haveIdeacard/Haveidea";

const IndexPage = () => {

  return (
    <>
      <Header />
    
      <Main
        mainHeading="We Have The Solutions To Grow Your Business"
      />
      <TrendingNews
        mainHeading="Get your dream Mobile App Development built in not time."
      />
      <Feature
        mainHeading="Climate Changes In The Recent Prospective Of The Global Warming"

      />
      <Trendingnow />
      <Business />
     

      <Haveidea/>
    <Footer/>

    </>

  )
}

export default IndexPage



