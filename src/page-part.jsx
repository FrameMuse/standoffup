import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Support from "./pages/support";
import FAQPage from "./pages/faq";
import Terms from "./pages/terms";
import ProfileAnother from "./pages/profile_another";
import Profile from "./pages/profile";
import Market from "./pages/market";
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
          <Route exact path="/faq">
            <FAQPage />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/market">
            <Market onChange={(e) => console.log(e)} />
          </Route>
          <Route exact path="/profile_another">
            <ProfileAnother />
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