import React from "react";

import i from "../../assets/images/bg-image-4.jpg";

class BookTour extends React.Component {
  render() {
    return (
      <section
        className="section parallax-container section section-md bg-image-overlay bg-image-4 context-dark text-center"
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
                  <h3 className="wow-outer">
                    <span className="font-weight-bold wow slideInRight">
                      First-class Impressions Are Waiting for You!
                    </span>
                  </h3>
                  <div className="wow-outer button-outer">
                    <a
                      className="button button-lg button-primary button-winona wow slideInLeft"
                      href="pricing.html"
                    >
                      Book a Tour now
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

export default BookTour;
