import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Detail from './pages/Detail'
import CampaignList from "./pages/CampaignList";
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Welcome },
  { path: "/login", key: "LOGIN", exact: true, component: Login },
  { path: "/signup", key: "SIGN_UP", exact: true, component: Signup },
  {
    path: "/app",
    key: "APP",
    component: props => {
      if (!localStorage.getItem("user")) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: CampaignList,
      },
      {
        path: "/app/detail",
        key: "APP_DETAIL",
        exact: true,
        component: Detail,
      },
      {
        path: "/app/profile",
        key: "APP_PROFILE",
        exact: true,
        component: Profile,
      },
      {
        path: "/app/aboutUs",
        key: "APP_ABOUT_US",
        exact: true,
        component: AboutUs,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
export function RenderRoutes({ routes }) {
  return (
    <Switch>

      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />

    </Switch>
  );
}
export default ROUTES;
