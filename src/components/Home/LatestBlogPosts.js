import React from "react";

import i1 from "../../assets/images/sidebar-blog-1-370x264.jpg";
import i2 from "../../assets/images/sidebar-blog-2-370x264.jpg";
import i3 from "../../assets/images/sidebar-blog-3-370x264.jpg";

class LatestBlogPosts extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-1 text-center">
        <div className="container">
          <h3 className="wow-outer">
            <span className="wow slideInDown">Latest Blog Posts</span>
          </h3>
          <div className="row row-30 row-lg-50 row-offset-big">
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article className="post-classic wow slideInLeft">
                <a className="post-classic-media" href="single-blog-post.html">
                  <img src={i1} alt width={370} height={264} />
                </a>
                <ul className="post-classic-meta">
                  <li>
                    <a className="button-winona" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                  </li>
                </ul>
                <h4 className="post-classic-title">
                  <a href="single-blog-post.html">
                    Hot Deals Recommends: Top 10 Cities to Visit This Year
                  </a>
                </h4>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article
                className="post-classic wow slideInLeft"
                data-wow-delay=".05s"
              >
                <a className="post-classic-media" href="single-blog-post.html">
                  <img src={i2} alt width={370} height={264} />
                </a>
                <ul className="post-classic-meta">
                  <li>
                    <a className="button-winona" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                  </li>
                </ul>
                <h4 className="post-classic-title">
                  <a href="single-blog-post.html">
                    How to Easily Book the Best Hotel for Your Next Trip
                  </a>
                </h4>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow-outer">
              {}
              <article
                className="post-classic wow slideInLeft"
                data-wow-delay=".1s"
              >
                <a className="post-classic-media" href="single-blog-post.html">
                  <img src={i3} alt width={370} height={264} />
                </a>
                <ul className="post-classic-meta">
                  <li>
                    <a className="button-winona" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <time dateTime={2019}>Apr 21, 2019 at 12:05 pm</time>
                  </li>
                </ul>
                <h4 className="post-classic-title">
                  <a href="single-blog-post.html">
                    Trip Planning Tips for Experienced Travelers
                  </a>
                </h4>
              </article>
            </div>
          </div>
          <div className="wow-outer button-outer">
            <a
              className="button button-lg button-primary button-winona wow slideInUp"
              href="grid-blog.html"
            >
              View all Blog posts
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestBlogPosts;
