import React from "react";

import Header from "../components/Header";

import FScreen from "../components/Home/FScreen";
import HotTours from "../components/Home/HotTours";
import Achievements from "../components/Home/Achievements";
import OurTeam from "../components/Home/OurTeam";
import BookTour from "../components/Home/BookTour";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import Countdown from "../components/Home/Countdown";
import LatestBlogPosts from "../components/Home/LatestBlogPosts";
import Partners from "../components/Home/Partners";
import Map from "../components/Home/Map";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <FScreen />
      <HotTours />
      <Achievements />
      <OurTeam />
      <BookTour />
      <WhatWeOffer />
      <Testimonials />
      <FAQ />
      <Countdown />
      <LatestBlogPosts />
      <Partners />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
