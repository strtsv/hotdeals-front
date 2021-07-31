import React from "react";

import i1 from "../../assets/images/logo-john-brad-135x87.png";
import i2 from "../../assets/images/logo-the-oldbrand-134x104.png";
import i3 from "../../assets/images/logo-havana-cabana-132x87.png";
import i4 from "../../assets/images/logo-brownie-143x85.png";
import i5 from "../../assets/images/logo-hillplan-111x85.png";

class Partners extends React.Component {
  render() {
    return (
      <section className="section section-sm text-center">
        <div className="container">
          {}
          <div
            className="owl-carousel owl-carousel-1"
            data-items={2}
            data-sm-items={3}
            data-md-items={4}
            data-lg-items={5}
            data-dots="true"
            data-nav="false"
            data-stage-padding={0}
            data-loop="true"
            data-margin={30}
            data-mouse-drag="false"
          >
            <div className="item wow-outer">
              <div className="wow slideInLeft">
                <a className="link-image" href="#">
                  <img src={i1} alt width={135} height={87} />
                </a>
              </div>
            </div>
            <div className="item wow-outer">
              <div className="wow slideInLeft" data-wow-delay=".05s">
                <a className="link-image" href="#">
                  <img src={i2} alt width={134} height={104} />
                </a>
              </div>
            </div>
            <div className="item wow-outer">
              <div className="wow slideInLeft" data-wow-delay=".1s">
                <a className="link-image" href="#">
                  <img src={i3} alt width={132} height={87} />
                </a>
              </div>
            </div>
            <div className="item wow-outer">
              <div className="wow slideInLeft" data-wow-delay=".15s">
                <a className="link-image" href="#">
                  <img src={i4} alt width={143} height={85} />
                </a>
              </div>
            </div>
            <div className="item wow-outer">
              <div className="wow slideInLeft" data-wow-delay=".2s">
                <a className="link-image" href="#">
                  <img src={i5} alt width={111} height={85} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
