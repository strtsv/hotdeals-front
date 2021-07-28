import React from "react";

import i from "../../assets/images/breadcrumbs-image-1.jpg";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section
        className="breadcrumbs-custom bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="breadcrumbs-custom-inner">
          <div className="container breadcrumbs-custom-container">
            <div className="breadcrumbs-custom-main">
              <h6 className="breadcrumbs-custom-subtitle title-decorated">
                Pages
              </h6>
              <h1 className="breadcrumbs-custom-title">Careers</h1>
            </div>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li className="active">Careers</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
