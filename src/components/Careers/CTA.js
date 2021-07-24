import React from "react";

class CTA extends React.Component {
  render() {
    return (
      <section className="section section-xs bg-primary-darker text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-12">
              <div className="box-cta-thin">
                <h4 className="wow-outer">
                  <span className="wow slideInRight">
                    Learn the Cost of{" "}
                    <span className="font-weight-bold">Your Next Trip</span>{" "}
                    Right Now!
                  </span>
                </h4>
                <div className="wow-outer button-outer">
                  <a
                    className="button button-primary button-winona wow slideInLeft"
                    href="pricing.html"
                  >
                    View all pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
