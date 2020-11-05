import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import CampaignList from "./pages/CampaignList";
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Welcome },
  { path: "/login", key: "LOGIN", exact: true, component: Login },
  { path: "/signup", key: "SIGN_UP", exact: true, component: Signup },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
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
        component: () => <h1>profile page</h1>,
      },
      {
        path: "/app/aboutUs",
        key: "APP_ABOUT_US",
        exact: true,
        component: () => <h1>about us page</h1>,
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
