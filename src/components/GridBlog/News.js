import React from "react";

import i1 from "../../assets/images/grid-blog-1-571x353.jpg";
import i2 from "../../assets/images/grid-blog-2-571x353.jpg";
import i3 from "../../assets/images/grid-blog-3-571x353.jpg";
import i4 from "../../assets/images/grid-blog-4-571x353.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-lg">
        <div className="container">
          <div className="row row-50 row-xxl-70">
            <div className="col-md-6 scaleFadeInWrap">
              {}
              <div className="wow scaleFadeIn">
                <article className="post-modern">
                  <a className="post-modern-media" href="single-blog-post.html">
                    <img src={i1} alt width={571} height={353} />
                  </a>
                  <h4 className="post-modern-title">
                    <a href="single-blog-post.html">
                      Hot Deals Recommends: Top 10 Cities to Visit
                    </a>
                  </h4>
                  <ul className="post-modern-meta">
                    <li>by Theresa Barnes</li>
                    <li>
                      <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                    </li>
                    <li>
                      <a className="button-winona" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                  <p>
                    Aenean sit amet libero felis. Quisque quis est eu magna
                    dapibus congue vitae vitae elit. Nulla maximus lectus eu
                    sodales tempor. Duis pharetra tortor sem, commodo euismod
                    eros faucibus vel.
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-6 scaleFadeInWrap">
              {}
              <div className="wow scaleFadeIn" data-wow-delay=".1s">
                <article className="post-modern">
                  {" "}
                  <a className="post-modern-media" href="single-blog-post.html">
                    <img src={i2} alt width={571} height={353} />
                  </a>
                  <h4 className="post-modern-title">
                    <a href="single-blog-post.html">
                      How to Easily Book the Best Hotel for Your Trip
                    </a>
                  </h4>
                  <ul className="post-modern-meta">
                    <li>by Theresa Barnes</li>
                    <li>
                      <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                    </li>
                    <li>
                      <a className="button-winona" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                  <p>
                    Nullam egestas, tellus sit amet luctus gravida, erat lacus
                    egestas sapien, eget dignissim sem nisl a lectus. Etiam
                    porttitor sapien et congue suscipit. Nunc a bibendum nulla,
                    id sollicitudin risus.
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-6 scaleFadeInWrap">
              {}
              <div className="wow scaleFadeIn">
                <article className="post-modern">
                  <a className="post-modern-media" href="single-blog-post.html">
                    <img src={i3} alt width={571} height={353} />
                  </a>
                  <h4 className="post-modern-title">
                    <a href="single-blog-post.html">
                      Trip Planning Tips for Experienced Travelers
                    </a>
                  </h4>
                  <ul className="post-modern-meta">
                    <li>by Theresa Barnes</li>
                    <li>
                      <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                    </li>
                    <li>
                      <a className="button-winona" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                  <p>
                    Pellentesque facilisis luctus arcu quis tincidunt. Nam
                    cursus, libero eu iaculis venenatis, purus metus sagittis
                    velit, non maximus libero arcu vel ipsum. Nam ultricies
                    pharetra magna commodo laoreet.
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-6 scaleFadeInWrap">
              {}
              <div className="wow scaleFadeIn" data-wow-delay=".1s">
                <article className="post-modern">
                  <a className="post-modern-media" href="single-blog-post.html">
                    <img src={i4} alt width={571} height={353} />
                  </a>
                  <h4 className="post-modern-title">
                    <a href="single-blog-post.html">
                      Top 10 Hotels: Rating by Our Travel Experts that Also
                      Includes Fashion & Boutique Hotels
                    </a>
                  </h4>
                  <ul className="post-modern-meta">
                    <li>by Theresa Barnes</li>
                    <li>
                      <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                    </li>
                    <li>
                      <a className="button-winona" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                  <p>
                    Praesent interdum iaculis nisl. Proin vestibulum diam in
                    diam gravida, et efficitur erat facilisis. Ut vel dapibus
                    massa, vitae tincidunt magna. Mauris ac gravida leo. Nulla
                    vulputate a felis a hendrerit.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="pagination">
            <div className="page-item active">
              <a className="page-link button-winona" href="#">
                1
              </a>
            </div>
            <div className="page-item">
              <a className="page-link button-winona" href="#">
                2
              </a>
            </div>
            <div className="page-item">
              <a className="page-link button-winona" href="#">
                3
              </a>
            </div>
            <div className="page-item">
              <a className="page-link button-winona" href="#">
                4
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
