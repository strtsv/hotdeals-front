import React from "react";

import i from "../../assets/images/careers-1-570x368.jpg";

class WorkingCaseCraft extends React.Component {
  render() {
    return (
      <section className="section section-lg">
        <div className="container">
          <div className="row row-50 justify-content-center justify-content-lg-between flex-lg-row-reverse">
            <div className="col-md-10 col-lg-6 col-xl-5">
              <h3>Working at Hot Deals</h3>
              <p>
                Cras non finibus nibh. Nullam sodales, ex quis ornare hendrerit,
                tellus leo luctus metus, in lobortis arcu enim eget justo. Ut
                porta quis neque at rhoncus. Vestibulum gravida eros a turpis
                accumsan, non venenatis nisl mattis. Proin eu nunc nec diam
                fringilla rhoncus. Proin consectetur ex nisl, vitae pellentesque
                justo rutrum tristique. Phasellus faucibus tortor sed.
              </p>
              <a
                className="button button-lg button-primary button-winona"
                href="about-us.html"
              >
                Learn more
              </a>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-6">
              <img
                className="img-responsive"
                src={i}
                alt
                width={570}
                height={368}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkingCaseCraft;
