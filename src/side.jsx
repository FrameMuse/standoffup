import React from "react";
import SidebarHome from "./modules/sidebar-home";
import { Switch } from "react-router-dom";

class Side extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <SidebarHome />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Side;