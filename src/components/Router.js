import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage";




class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={LandingPage} />

        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
