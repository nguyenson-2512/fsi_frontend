import React from "react";

import "./App.css";

// import image from './assets/huong.jpg'
// import meraki from './assets/meraki.png'
// import Header from './components/Header'
// import CampaignList from './pages/CampaignList'
// import CreateCampaign from './components/CreateCampaign'
// import Detail from './components/Detail'
// import { Container, Row, Col} from 'reactstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, google } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import ROUTES, { RenderRoutes } from './routes'

function App() {
  // return (
  //   <div className="App">

  //     <CampaignList />



      


  //   </div>
  // )}
//   );
  return (
    <div className="App">

        <RenderRoutes routes={ROUTES} />

    </div>

  )
}

export default App;

function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}