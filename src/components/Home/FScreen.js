import React from "react";

class FScreen extends React.Component {
  render() {
    return (
      <section
        className="owl-carousel owl-carousel-main"
        data-items={1}
        data-margin={0}
        data-dots="true"
        data-animation-in="fadeIn"
        data-animation-out="fadeOut"
        data-autoplay={5000}
      >
        <div className="section section-halfscreen bg-gray-1">
          <div className="section-halfscreen-inner">
            <div
              className="section-halfscreen-image wow fadeIn"
              style={{
                backgroundImage: "url(images/slide-1-944x721.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="section-halfscreen-content">
                    <div className="wow-outer heading-3">
                      <h6 className="wow fadeInUp" data-wow-delay=".2s">
                        Welcome to our Travel agency
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        <span className="font-weight-light">Enjoy Your</span>
                        <br />
                        <span className="font-weight-bold">Dream Vacation</span>
                      </h1>
                    </div>
                    <div className="box-custom-1 wow-outer p">
                      <p className="wow fadeInDown" data-wow-delay=".2s">
                        Since 1999, Hot Deals has been committed to bringing our
                        clients the best in value and quality travel
                        arrangements with award-winning service.
                      </p>
                    </div>
                    <a
                      className="button button-primary button-big button-winona wow fadeIn"
                      href="#"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="heading-decorative wow fadeInUp" data-wow-delay=".2s">
            <span className="big">Travel Agency</span>
          </h1>
        </div>
        <div className="section section-halfscreen bg-gray-1">
          <div className="section-halfscreen-inner">
            <div
              className="section-halfscreen-image wow fadeIn"
              style={{
                backgroundImage: "url(images/slide-2-944x721.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="section-halfscreen-content">
                    <div className="wow-outer heading-3">
                      <h6 className="wow fadeInUp" data-wow-delay=".2s">
                        Your #1 Traveling Guide
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        <span className="font-weight-light">Unique Travel</span>
                        <br />
                        <span className="font-weight-bold">
                          Insights & Tips
                        </span>
                      </h1>
                    </div>
                    <div className="box-custom-1 wow-outer p">
                      <p className="wow fadeInDown" data-wow-delay=".2s">
                        Besides offering great tours, cruises, and excursions,
                        we also regularly publish travel tips & tricks in our
                        blog. Feel free to browse our website for detailed
                        information!
                      </p>
                    </div>
                    <a
                      className="button button-primary button-big button-winona wow fadeIn"
                      href="#"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="heading-decorative wow fadeInUp" data-wow-delay=".2s">
            <span className="big">Travel Agency</span>
          </h1>
        </div>
        <div className="section section-halfscreen bg-gray-1">
          <div className="section-halfscreen-inner">
            <div
              className="section-halfscreen-image wow fadeIn"
              style={{
                backgroundImage: "url(images/slide-3-944x721.jpg)"
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="section-halfscreen-content">
                    <div className="wow-outer heading-3">
                      <h6 className="wow fadeInUp" data-wow-delay=".2s">
                        Pick any tour you want
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        <span className="font-weight-light">
                          Wide Variety of
                        </span>
                        <br />
                        <span className="font-weight-bold">Amazing Tours</span>
                      </h1>
                    </div>
                    <div className="box-custom-1 wow-outer p">
                      <p className="wow fadeInDown" data-wow-delay=".2s">
                        At Hot Deals, we offer tours that let you visit the
                        whole world, from exotic destinations to historic and
                        religious ones. We can also customize any tour for you.
                      </p>
                    </div>
                    <a
                      className="button button-primary button-big button-winona wow fadeIn"
                      href="#"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="heading-decorative wow fadeInUp" data-wow-delay=".2s">
            <span className="big">Travel Agency</span>
          </h1>
        </div>
      </section>
    );
  }
}

export default FScreen;
