import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-minimal"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"
                  >
                    <span />
                  </button>
                  {}
                  <a className="rd-navbar-brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src="images/logo-default-356x110.png"
                      alt
                      width={178}
                      height={55}
                    />
                  </a>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-1">
                    {}
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Features
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="progress-bars.html"
                                >
                                  Progress bars
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tabs.html"
                                >
                                  Tabs
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="small-features.html"
                                >
                                  Small Features
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team.html"
                                >
                                  Team
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="testimonials.html"
                                >
                                  Testimonials
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="pricing.html"
                                >
                                  Pricing
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="accordions.html"
                                >
                                  Accordions
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="tours.html">
                          Tours
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-tour.html"
                            >
                              Single Tour
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="#">
                          Blog
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="grid-blog.html"
                            >
                              Grid Blog
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="sidebar-blog.html"
                            >
                              Sidebar Blog
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-blog-post.html"
                            >
                              Single Blog Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Gallery
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="grid-layout.html"
                            >
                              Grid Layout
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="masonry-layout.html"
                            >
                              Masonry Layout
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="modern-layout.html"
                            >
                              Modern Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <div
                              className="banner"
                              style={{
                                backgroundImage:
                                  "url(images/megamenu-banner-1-570x368.jpg)"
                              }}
                            >
                              <a
                                className="button button-sm button-primary button-winona"
                                href="#"
                              >
                                Buy Theme
                              </a>
                            </div>
                          </li>
                          <li className="rd-megamenu-item">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="404-page.html"
                                >
                                  404 Page
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="503-page.html"
                                >
                                  503 Page
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="coming-soon.html"
                                >
                                  Coming Soon
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="under-construction.html"
                                >
                                  Under Construction
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="about-us.html"
                                >
                                  About Us
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team-member.html"
                                >
                                  Team Member
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="grid-gallery.html"
                                >
                                  Grid Gallery
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="careers.html"
                                >
                                  Careers
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search Results
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="single-job.html"
                                >
                                  Single Job
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="modern-gallery.html"
                                >
                                  Modern Gallery
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="masonry-gallery.html"
                                >
                                  Masonry Gallery
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                  {}
                  <div className="rd-navbar-search" id="rd-navbar-search-1">
                    <button
                      className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                      data-rd-navbar-toggle="#rd-navbar-search-1"
                    >
                      <span />
                    </button>
                    <form
                      className="rd-search"
                      action="search-results.html"
                      data-search-live="rd-search-results-live-1"
                      method="GET"
                    >
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input-1"
                        >
                          Search...
                        </label>
                        <input
                          className="form-input rd-navbar-search-form-input"
                          id="rd-navbar-search-form-input-1"
                          type="text"
                          name="s"
                          autoComplete="off"
                        />
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live-1"
                        />
                      </div>
                      <button
                        className="rd-search-form-submit fa-search"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
