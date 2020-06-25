import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Support from "./pages/support";
import FAQ from "./pages/faq";
class PagePart extends React.Component {
  render() {
    return (
      <page-part>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route path="/faq">
            {/* <FAQ /> */}
          </Route>
        </Switch>
        <footer>
          <NavLink to="/terms">Пользовательское соглашение</NavLink>
          <NavLink to="/fairplay">Проверка честной игры</NavLink>
        </footer>
      </page-part>
    )
  }
}

export default PagePart;