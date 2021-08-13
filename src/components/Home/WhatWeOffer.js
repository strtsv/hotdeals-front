import React from "react";

class WhatWeOffer extends React.Component {
  render() {
    return (
      <section className="section section-lg text-center">
        <div className="container">
          <h3 className="wow-outer">
            <span className="wow slideInUp">What We Offer</span>
          </h3>
          <p className="wow-outer">
            <span className="text-width-1 wow slideInDown">
              Our travel agency offers not only regular tours and excursions but
              also a variety of other services that we hope will satisfy your
              travel needs.
            </span>
          </p>
          <div className="row row-50 row-xxl-70 offset-top-2">
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer">
              {}
              <article className="box-light wow slideInLeft">
                <div className="box-light-icon linearicons-ship" />
                <h4 className="box-light-title">Voyages & Cruises</h4>
                <p>
                  At our travel agency, you can find a variety of voyages and
                  cruises according to your preferences and needs.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer">
              {}
              <article
                className="box-light wow slideInLeft"
                data-wow-delay=".05s"
              >
                <div className="box-light-icon linearicons-apartment" />
                <h4 className="box-light-title">Hotel Bookings</h4>
                <p>
                  Using the form on our website, you can book a room at any
                  hotel all over the world with just a few clicks.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer">
              {}
              <article
                className="box-light wow slideInLeft"
                data-wow-delay=".1s"
              >
                <div className="box-light-icon linearicons-plane" />
                <h4 className="box-light-title">Air Tickets</h4>
                <p>
                  If you need to book air tickets quickly and without being
                  overcharged, then our travel agency is what you need.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 wow-outer">
              {}
              <article
                className="box-light wow slideInLeft"
                data-wow-delay=".15s"
              >
                <div className="box-light-icon linearicons-document2" />
                <h4 className="box-light-title">Visas</h4>
                <p>
                  We can easily handle all your visa application requests in no
                  time. You can always trust our travel professionals!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeOffer;
