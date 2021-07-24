import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-standard bg-gray-2">
        <div className="footer-standard-main">
          <div className="container">
            <div className="row row-50">
              <div className="col-lg-4">
                <div className="inset-right-1">
                  <h4>About Us</h4>
                  <p>
                    Our tour agency is the leading provider of cheap air tickets
                    as well as amazing offers for tourists and people who like
                    to explore the untraveled world paths. We can create the
                    most unforgettable holiday for you, your family, and
                    friends!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4">
                <div className="box-1">
                  <h4>Contact Information</h4>
                  <ul className="list-sm">
                    <li className="object-inline">
                      <span className="icon icon-md icon-primary mdi mdi-map-marker" />
                      <a className="link-default" href="#">
                        2130 Fulton Street <br /> San Diego, CA 94117-1080 USA
                      </a>
                    </li>
                    <li className="object-inline">
                      <span className="icon icon-md icon-primary mdi mdi-phone" />
                      <a className="link-default" href="tel:#">
                        1-800-1234-678
                      </a>
                    </li>
                    <li className="object-inline">
                      <span className="icon icon-md icon-primary mdi mdi-email" />
                      <a className="link-default" href="mailto:#">
                        info@demolink.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-7 col-lg-4">
                <h4>Newsletter</h4>
                <p>
                  Sign up to our newsletter and be the first to know about the
                  latest news, special offers, events, and discounts.
                </p>
                {}
                <form
                  className="rd-form rd-mailform form-inline"
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="subscribe-form-footer-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label
                      className="form-label"
                      htmlFor="subscribe-form-footer-email"
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="form-button">
                    <button
                      className="button button-primary button-icon button-icon-only button-winona"
                      type="submit"
                      aria-label="submit"
                    >
                      <span className="icon mdi mdi-email-outline" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-standard-aside">
            <a className="brand" href="index.html">
              <img
                className="brand-logo-light"
                src="images/logo-inverse-356x110.png"
                alt
                width={178}
                height={55}
              />
            </a>
            {}
            <p className="rights">
              <span>© </span>
              <span className="copyright-year" />
              <span> </span>
              <span>All Rights Reserved.</span>
              <span> </span>
              <br className="d-sm-none" />
              <span> </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
