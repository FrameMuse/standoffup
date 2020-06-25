import React from "react";
import { Switch, Route } from "react-router-dom";
import SidebarHome from "./modules/sidebar-home";
import PagePart from "./page-part";

class Side extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <SidebarHome />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Side;