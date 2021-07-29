import React from "react";

class FAQ extends React.Component {
  render() {
    return (
      <section className="section section-lg">
        <div className="container">
          <div className="row row-50 justify-content-lg-between offset-top-1">
            <div className="col-lg-7 col-xl-6">
              <h3 className="wow-outer">
                <span className="wow slideInDown">
                  Frequently Asked Questions
                </span>
              </h3>
              {}
              <div
                className="card-group-custom card-group-corporate wow-outer"
                id="accordion1"
                role="tablist"
                aria-multiselectable="false"
              >
                {}
                <article
                  className="card card-custom card-corporate wow fadeInDown"
                  data-wow-delay=".05s"
                >
                  <div
                    className="card-header"
                    id="accordion1-heading-1"
                    role="tab"
                  >
                    <div className="card-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-collapse-1"
                        aria-controls="accordion1-collapse-1"
                        aria-expanded="true"
                      >
                        What are the advantages of purchasing a website
                        template?
                        <div className="card-arrow" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse show"
                    id="accordion1-collapse-1"
                    role="tabpanel"
                    aria-labelledby="accordion1-heading-1"
                  >
                    <div className="card-body">
                      <p>
                        The major advantage is price: You get a high quality
                        design for just $20-$70. You don’t have to hire a web
                        designer or web design studio. Second advantage is time
                        frame: It usually takes 5-15 days for a good designer to
                        produce a web page of such quality.
                      </p>
                    </div>
                  </div>
                </article>
                {}
                <article
                  className="card card-custom card-corporate wow fadeInDown"
                  data-wow-delay=".1s"
                >
                  <div
                    className="card-header"
                    id="accordion1-heading-2"
                    role="tab"
                  >
                    <div className="card-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-collapse-2"
                        aria-controls="accordion1-collapse-2"
                        aria-expanded="false"
                      >
                        Do you provide any scripts with your templates or could
                        you do some custom programming?
                        <div className="card-arrow" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-collapse-2"
                    role="tabpanel"
                    aria-labelledby="accordion1-heading-2"
                  >
                    <div className="card-body">
                      <p>
                        Our templates do not include any additional scripts.
                        Newsletter subscriptions, search fields, forums, image
                        galleries (in HTML versions of Flash products) are
                        inactive. Basic scripts can be easily added at
                        www.zemez.io If you are not sure that the element you’re
                        interested in is active please contact our Support Chat
                        for clarification.
                      </p>
                    </div>
                  </div>
                </article>
                {}
                <article
                  className="card card-custom card-corporate wow fadeInDown"
                  data-wow-delay=".15s"
                >
                  <div
                    className="card-header"
                    id="accordion1-heading-3"
                    role="tab"
                  >
                    <div className="card-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-collapse-3"
                        aria-controls="accordion1-collapse-3"
                        aria-expanded="false"
                      >
                        What do I receive when I order a template from Zemez?
                        <div className="card-arrow" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-collapse-3"
                    role="tabpanel"
                    aria-labelledby="accordion1-heading-3"
                  >
                    <div className="card-body">
                      <p>
                        After you complete the payment via our secure form you
                        will receive the instructions for downloading the
                        product. The source files in the download package can
                        vary based on the type of the product you have
                        purchased.
                      </p>
                    </div>
                  </div>
                </article>
                {}
                <article
                  className="card card-custom card-corporate wow fadeInDown"
                  data-wow-delay=".2s"
                >
                  <div
                    className="card-header"
                    id="accordion1-heading-4"
                    role="tab"
                  >
                    <div className="card-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-collapse-4"
                        aria-controls="accordion1-collapse-4"
                        aria-expanded="false"
                      >
                        In what formats are your templates available?
                        <div className="card-arrow" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-collapse-4"
                    role="tabpanel"
                    aria-labelledby="accordion1-heading-4"
                  >
                    <div className="card-body">
                      <p>
                        Website templates are available in Photoshop and HTML
                        formats. Fonts are included with the Photoshop file. In
                        most templates, HTML is compatible with Adobe®
                        Dreamweaver® and Microsoft® FrontPage®.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-5">
              <h3 className="wow-outer">
                <span className="wow slideInDown">Skills</span>
              </h3>
              <div className="progress-linear-outer wow-outer">
                {}
                <article
                  className="progress-linear wow slideInDown"
                  data-wow-delay=".05s"
                >
                  <div className="progress-header">
                    <p>Dedication</p>
                    <span className="progress-value">90</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
              </div>
              <div className="progress-linear-outer wow-outer">
                {}
                <article
                  className="progress-linear wow slideInDown"
                  data-wow-delay=".1s"
                >
                  <div className="progress-header">
                    <p>Knowledge</p>
                    <span className="progress-value">65</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
              </div>
              <div className="progress-linear-outer wow-outer">
                {}
                <article
                  className="progress-linear wow slideInDown"
                  data-wow-delay=".15s"
                >
                  <div className="progress-header">
                    <p>Experience</p>
                    <span className="progress-value">100</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
              </div>
              <div className="progress-linear-outer wow-outer">
                {}
                <article
                  className="progress-linear wow slideInDown"
                  data-wow-delay=".2s"
                >
                  <div className="progress-header">
                    <p>Reliability</p>
                    <span className="progress-value">75</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
