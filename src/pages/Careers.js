import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Careers/Breadcrumbs";
import WorkingCaseCraft from "../components/Careers/WorkingCaseCraft";
import AvailableVacancies from "../components/Careers/AvailableVacancies";
import CTA from "../components/Careers/CTA";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <WorkingCaseCraft />
      <AvailableVacancies />
      <CTA />
      <Footer />
    </div>
  );
};

export default Careers;
