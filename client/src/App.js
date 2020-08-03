import React, { Component, useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { Spinner } from react-strap;

import "./App.css";
import "./style.generated.css";

import { Provider } from "react-redux";
import store from "./store";
import { stripBasename } from "history/PathUtils";

/*This space is for whatever*/

const tiny = require("probabilis");

const vt = tiny("So much space!");

console.log(vt);

/**/

const LoginComponentLazy = lazy(() =>
  import("./components/auth/LoginComponent.js")
);

const NavbarComponentLazy = lazy(() =>
  import("./components/NavbarComponent.js")
);
const SidebarMenuComponentLazy = lazy(() =>
  import("./components/SidebarMenuComponent.js")
);
const ContentComponentLazy = lazy(() =>
  import("./components/ContentComponent.js")
);

const history = createBrowserHistory();

const HomePageTemplate = (props) => (
  <div>
    
    <Suspense fallback={<div className="centered"><Spinner style={{ width: '3rem', height: '3rem' }} color="danger"/></div>}>   
      <SidebarMenuComponentLazy />
      <NavbarComponentLazy />
      <ContentComponentLazy />
    </Suspense>
  </div>
);

const LoginTemplate = (props) => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponentLazy />
    </Suspense>
  </div>
);

{
  /*Home Page*/
}
const Home = () => <HomePageTemplate title="HomePage" status="HomeP" />;

{
  /*Login Page*/
}
const Login = () => <LoginTemplate title="LoginPage" status="LoginP" />;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
