import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Team/Breadcrumbs";
import ColumnLayout from "../components/Team/ColumnLayout";
import OurTeam from "../components/Team/OurTeam";
import WhoWeAre from "../components/Team/WhoWeAre";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <ColumnLayout />
      <OurTeam />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default Team;
