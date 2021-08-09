import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/GridBlog/Breadcrumbs";
import News from "../components/GridBlog/News";
import Footer from "../components/Footer";

const GridBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <News />
      <Footer />
    </div>
  );
};

export default GridBlog;
