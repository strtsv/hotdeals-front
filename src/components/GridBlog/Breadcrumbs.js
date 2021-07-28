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
                Blog
              </h6>
              <h1 className="breadcrumbs-custom-title">Grid Blog</h1>
            </div>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li className="active">Grid Blog</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
