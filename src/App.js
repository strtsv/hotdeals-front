import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Switch>
      {/* <Route exact path="/index-1.html" component={About} /> */}
      <Route exact path="/contacts.html" component={Contacts} />
      <Route exact path="/blog.html" component={Blog} />
      {/* <Route exact path="/index-4.html" component={Products} /> */}
      <Route exact path="/blog-post.html" component={BlogPost} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
