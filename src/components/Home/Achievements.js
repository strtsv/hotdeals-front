import React from "react";

class Achievements extends React.Component {
  render() {
    return (
      <section className="section section-lg text-center bg-gray-1">
        <div className="container">
          <h3 className="wow-outer">
            <span className="wow slideInUp">Advantages and Achievements</span>
          </h3>
          <p className="wow-outer">
            <span className="text-width-1 wow slideInDown">
              Since our establishment, we have been working hard to bring our
              clients the best travel experiences and it has made us the leading
              tour agency in the USA.
            </span>
          </p>
          <div className="row row-50">
            <div className="col-6 col-md-3 wow-outer">
              {}
              <article className="counter-minimal wow slideInDown">
                <div className="counter-minimal-icon linearicons-trophy2" />
                <div className="counter-minimal-main">
                  <div className="counter">32</div>
                </div>
                <h5 className="counter-minimal-title">International Awards</h5>
              </article>
            </div>
            <div className="col-6 col-md-3 wow-outer">
              {}
              <article className="counter-minimal wow slideInDown">
                <div className="counter-minimal-icon linearicons-sun" />
                <div className="counter-minimal-main">
                  <div className="counter">568</div>
                </div>
                <h5 className="counter-minimal-title">Breathtaking Tours</h5>
              </article>
            </div>
            <div className="col-6 col-md-3 wow-outer">
              {}
              <article className="counter-minimal wow slideInDown">
                <div className="counter-minimal-icon linearicons-star" />
                <div className="counter-minimal-main">
                  <div className="counter">20</div>
                </div>
                <h5 className="counter-minimal-title">Years of Experience</h5>
              </article>
            </div>
            <div className="col-6 col-md-3 wow-outer">
              {}
              <article className="counter-minimal wow slideInDown">
                <div className="counter-minimal-icon linearicons-users2" />
                <div className="counter-minimal-main">
                  <div className="counter">102</div>
                </div>
                <h5 className="counter-minimal-title">Qualified Employees</h5>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Achievements;
