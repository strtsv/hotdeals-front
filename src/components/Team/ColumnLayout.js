import React from "react";

import i1 from "../../assets/images/team-1-270x273.jpg";
import i2 from "../../assets/images/team-2-270x273.jpg";
import i3 from "../../assets/images/team-3-270x273.jpg";
import i4 from "../../assets/images/team-4-270x273.jpg";

class ColumnLayout extends React.Component {
  render() {
    return (
      <section className="section section-lg text-center bg-white">
        <div className="container">
          <h3>4 Column Layout</h3>
          <div className="row row-30 row-lg-50">
            <div className="col-sm-6 col-lg-3 wow-outer">
              {}
              <article className="profile-classic wow slideInLeft">
                <div className="profile-classic-main">
                  <img
                    className="profile-classic-image"
                    src={i1}
                    alt
                    width={270}
                    height={273}
                  />
                  <div className="profile-classic-caption">
                    <div className="group group-xs group-middle">
                      <a
                        className="icon icon-sm icon-creative mdi mdi-facebook"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-twitter"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-instagram"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-google"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-linkedin"
                        href="#"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="profile-classic-title">
                  <a href="#">Jean Thompson</a>
                </h5>
                <p className="profile-classic-position">Agency Director</p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow-outer">
              {}
              <article
                className="profile-classic wow slideInLeft"
                data-wow-delay=".05s"
              >
                <div className="profile-classic-main">
                  <img
                    className="profile-classic-image"
                    src={i2}
                    alt
                    width={270}
                    height={273}
                  />
                  <div className="profile-classic-caption">
                    <div className="group group-xs group-middle profile-classic-group">
                      <a
                        className="icon icon-sm icon-creative mdi mdi-facebook"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-twitter"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-instagram"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-google"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-linkedin"
                        href="#"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="profile-classic-title">
                  <a href="#">Marie Fernandez</a>
                </h5>
                <p className="profile-classic-position">
                  Travel Visa Specialist
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow-outer">
              {}
              <article
                className="profile-classic wow slideInLeft"
                data-wow-delay=".1s"
              >
                <div className="profile-classic-main">
                  <img
                    className="profile-classic-image"
                    src={i3}
                    alt
                    width={270}
                    height={273}
                  />
                  <div className="profile-classic-caption">
                    <div className="group group-xs group-middle profile-classic-group">
                      <a
                        className="icon icon-sm icon-creative mdi mdi-facebook"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-twitter"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-instagram"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-google"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-linkedin"
                        href="#"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="profile-classic-title">
                  <a href="#">Brian Payne</a>
                </h5>
                <p className="profile-classic-position">Tour Consultant</p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow-outer">
              {}
              <article
                className="profile-classic wow slideInLeft"
                data-wow-delay=".15s"
              >
                <div className="profile-classic-main">
                  <img
                    className="profile-classic-image"
                    src={i4}
                    alt
                    width={270}
                    height={273}
                  />
                  <div className="profile-classic-caption">
                    <div className="group group-xs group-middle profile-classic-group">
                      <a
                        className="icon icon-sm icon-creative mdi mdi-facebook"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-twitter"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-instagram"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-google"
                        href="#"
                      />
                      <a
                        className="icon icon-sm icon-creative mdi mdi-linkedin"
                        href="#"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="profile-classic-title">
                  <a href="#">Natalie Porter</a>
                </h5>
                <p className="profile-classic-position">Travel Manager</p>
              </article>
            </div>
          </div>
          <div className="wow-outer button-outer">
            <a
              className="button button-lg button-primary button-winona wow slideInUp"
              href="#"
            >
              View all Team
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ColumnLayout;
