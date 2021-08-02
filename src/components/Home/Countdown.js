import React from "react";

import i from "../../assets/images/bg-image-5.jpg";

class Countdown extends React.Component {
  render() {
    return (
      <section
        className="section parallax-container section section-xs bg-image-overlay bg-image-5 context-dark text-center"
        data-parallax-img={i}
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="parallax-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-12">
                <div className="box-cta-thin">
                  <h4 className="wow-outer">
                    <span className="font-weight-bold wow slideInRight">
                      Buy a Tour Without Leaving Your Home
                    </span>
                  </h4>
                  <div className="wow-outer button-outer">
                    <a
                      className="button button-primary button-winona wow slideInLeft"
                      href="pricing.html"
                    >
                      Choose a Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;
