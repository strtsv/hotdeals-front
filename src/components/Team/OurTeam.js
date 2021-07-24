import React from "react";

import i1 from "../../assets/images/team-1-270x273.jpg";
import i2 from "../../assets/images/team-2-270x273.jpg";
import i3 from "../../assets/images/team-3-270x273.jpg";
import i4 from "../../assets/images/team-4-270x273.jpg";

class OurTeam extends React.Component {
  render() {
    return (
      <section className="section section-lg text-center bg-white">
        <div className="container">
          <h3 className="wow-outer">
            <span className="wow slideInUp">Our Team</span>
          </h3>
          <div className="row row-30 row-lg-50 row-xxl-70 justify-content-center justify-content-lg-start">
            <div className="col-md-10 col-lg-6 wow-outer">
              {}
              <article className="profile-creative wow slideInLeft">
                <figure className="profile-creative-figure">
                  <img
                    className="profile-creative-image"
                    src={i1}
                    alt
                    width={270}
                    height={273}
                  />
                </figure>
                <div className="profile-creative-main">
                  <h5 className="profile-creative-title">
                    <a href="#">Jean Thompson</a>
                  </h5>
                  <p className="profile-creative-position">Agency Director</p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon icon-md mdi mdi-phone" />
                      <a href="tel:#">1-800-1324-567</a>
                    </div>
                  </div>
                  <p>
                    Curabitur nisi ex, porta vel elit in, gravida facilisis
                    magna. Etiam risus mi, pharetra at pellentesque id, sagittis
                    in quam. Vivamus magna ex, rutrum sit.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-10 col-lg-6 wow-outer">
              {}
              <article
                className="profile-creative wow slideInLeft"
                data-wow-delay=".2s"
              >
                <figure className="profile-creative-figure">
                  <img
                    className="profile-creative-image"
                    src={i2}
                    alt
                    width={270}
                    height={273}
                  />
                </figure>
                <div className="profile-creative-main">
                  <h5 className="profile-creative-title">
                    <a href="#">Marie Fernandez</a>
                  </h5>
                  <p className="profile-creative-position">
                    Travel Visa Specialist
                  </p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon icon-md mdi mdi-phone" />
                      <a href="tel:#">1-800-1324-567</a>
                    </div>
                  </div>
                  <p>
                    Vaecenas sed rhoncus velit. Pellentesque mattis, sapien in
                    blandit iaculis, risus quam finibus tellus, nec tincidunt mi
                    arcu id ante.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-10 col-lg-6 wow-outer">
              {}
              <article className="profile-creative wow slideInLeft">
                <figure className="profile-creative-figure">
                  <img
                    className="profile-creative-image"
                    src={i3}
                    alt
                    width={270}
                    height={273}
                  />
                </figure>
                <div className="profile-creative-main">
                  <h5 className="profile-creative-title">
                    <a href="#">Brian Payne</a>
                  </h5>
                  <p className="profile-creative-position">Tour Consultant</p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon icon-md mdi mdi-phone" />
                      <a href="tel:#">1-800-1324-567</a>
                    </div>
                  </div>
                  <p>
                    Aenean aliquam bibendum velit, euismod et. Suspendisse
                    ornare iaculis nisl, quis gravida ante tempor id. Fusce
                    porttitor odio ut sapien aliquet
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-10 col-lg-6 wow-outer">
              {}
              <article
                className="profile-creative wow slideInLeft"
                data-wow-delay=".2s"
              >
                <figure className="profile-creative-figure">
                  <img
                    className="profile-creative-image"
                    src={i4}
                    alt
                    width={270}
                    height={273}
                  />
                </figure>
                <div className="profile-creative-main">
                  <h5 className="profile-creative-title">
                    <a href="#">Natalie Porter</a>
                  </h5>
                  <p className="profile-creative-position">Travel Manager</p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon icon-md mdi mdi-phone" />
                      <a href="tel:#">1-800-1324-567</a>
                    </div>
                  </div>
                  <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus orci urna,
                    ultricies nec sem a, aliquet interdum dui.
                  </p>
                </div>
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

export default OurTeam;
