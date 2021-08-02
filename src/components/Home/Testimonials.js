import React from "react";

import i1 from "../../assets/images/testimonials-person-1-96x96.jpg";
import i2 from "../../assets/images/testimonials-person-2-96x96.jpg";
import i3 from "../../assets/images/testimonials-person-3-96x96.jpg";
import i4 from "../../assets/images/testimonials-person-4-96x96.jpg";
import i5 from "../../assets/images/testimonials-person-5-96x96.jpg";
import i6 from "../../assets/images/testimonials-person-6-96x96.jpg";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-1 text-center">
        <div className="container">
          <h3 className="wow-outer">
            <span className="wow slideInDown">Testimonials</span>
          </h3>
          <div className="slick-widget-testimonials wow fadeIn">
            <div
              className="slick-slider carousel-child"
              id="child-carousel"
              data-for=".carousel-parent"
              data-arrows="true"
              data-loop="true"
              data-dots="false"
              data-swipe="true"
              data-items={1}
              data-sm-items={3}
              data-md-items={5}
              data-lg-items={5}
              data-xl-items={5}
              data-center-mode="true"
              data-slide-to-scroll={1}
            >
              <div className="item">
                <img src={i1} alt width={96} height={96} />
              </div>
              <div className="item">
                <img src={i2} alt width={96} height={96} />
              </div>
              <div className="item">
                <img src={i3} alt width={96} height={96} />
              </div>
              <div className="item">
                <img src={i4} alt width={96} height={96} />
              </div>
              <div className="item">
                <img src={i5} alt width={96} height={96} />
              </div>
              <div className="item">
                <img src={i6} alt width={96} height={96} />
              </div>
            </div>
            {}
            <div
              className="slick-slider carousel-parent"
              data-arrows="false"
              data-loop="true"
              data-dots="false"
              data-swipe="false"
              data-items={1}
              data-fade="true"
              data-child="#child-carousel"
              data-for="#child-carousel"
            >
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Kelly McMillan</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      I wanted to thank you very much for planning the trip to
                      France for my sister and me. It was amazing and exceeded
                      my expectations! We had a wonderful time and were very
                      pleased.
                    </p>
                  </div>
                </blockquote>
              </div>
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Harold Barnett</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      We had a marvelous time in our travels to Madagascar,
                      Zimbabwe, and Botswana, we had just wonderful experiences.
                      Your service was amazing and everyone was very attentive!
                    </p>
                  </div>
                </blockquote>
              </div>
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Albert Webb</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      Just wanted to say many, many thanks for helping me set up
                      an amazing Costa Rican adventure! My nephew and I had a
                      great time! All of the accommodations were perfect, thank
                      you!
                    </p>
                  </div>
                </blockquote>
              </div>
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Samantha Lee</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      The trip you put together for us in Italy went splendidly.
                      Each touch point, each adventure, felt like you planned it
                      with care about our needs and expectations. Thank you!
                    </p>
                  </div>
                </blockquote>
              </div>
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Bill Warner</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      Every reservation and tidbit of information you provided
                      were invaluable in speeding my way along without pause and
                      perfect segue for my journey in the Canadian Rockies.
                      Thank you!
                    </p>
                  </div>
                </blockquote>
              </div>
              <div className="item">
                {}
                <blockquote className="quote-light">
                  <cite className="quote-light-cite">Sam Adams</cite>
                  <p className="quote-light-caption">Regular Client</p>
                  <svg
                    className="quote-light-mark"
                    x="0px"
                    y="0px"
                    width="35px"
                    height="25px"
                    viewBox="0 0 35 25"
                  >
                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z" />
                  </svg>
                  <div className="quote-light-text">
                    <p>
                      Thanks to you, we had a wonderful experience in Peru. We
                      knew only a small amount of Spanish, but your
                      recommendations and guidance helped us a lot. Thank you
                      for such a great experience!
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
