import React from "react";

import i1 from "../../assets/images/team-2-370x368.jpg";
import i2 from "../../assets/images/team-3-370x368.jpg";
import i3 from "../../assets/images/team-1-370x368.jpg";

class WhoWeAre extends React.Component {
  render() {
    return (
      <section className="section section-lg section-last text-center bg-white">
        <div className="container">
          <h3 className="wow-outer text-center">
            <span className="wow slideInDown">Our Wonderful Team</span>
          </h3>
          <div className="row row-30 row-lg-50">
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article className="profile-minimal wow slideInLeft">
                <img
                  className="profile-minimal-image"
                  src={i1}
                  alt
                  width={370}
                  height={368}
                />
                <div className="profile-minimal-caption">
                  <h4 className="profile-minimal-title">
                    <a href="team-member.html">Jean Thompson</a>
                  </h4>
                  <p className="profile-minimal-position">Agency Director</p>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article
                className="profile-minimal wow slideInLeft"
                data-wow-delay=".05s"
              >
                <img
                  className="profile-minimal-image"
                  src={i2}
                  alt
                  width={370}
                  height={368}
                />
                <div className="profile-minimal-caption">
                  <h4 className="profile-minimal-title">
                    <a href="team-member.html">Brian Payne</a>
                  </h4>
                  <p className="profile-minimal-position">Tour Consultant</p>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article
                className="profile-minimal wow slideInLeft"
                data-wow-delay=".1s"
              >
                <img
                  className="profile-minimal-image"
                  src={i3}
                  alt
                  width={370}
                  height={368}
                />
                <div className="profile-minimal-caption">
                  <h4 className="profile-minimal-title">
                    <a href="team-member.html">Natalie Porter</a>
                  </h4>
                  <p className="profile-minimal-position">Travel Agent</p>
                </div>
              </article>
            </div>
          </div>
          <div className="wow-outer button-outer">
            <a
              className="button button-lg button-primary button-winona wow slideInUp"
              href="about-us.html"
            >
              View all Team
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default WhoWeAre;
