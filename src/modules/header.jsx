import React from "react";
import { connect } from "react-redux";
import { Price, Logo, Panel, Button } from "../components";
import { NavLink, Route, Switch } from "react-router-dom";
import { deployPopup } from "../reducers/popup";

const mapStateToProps = state => ({
  user: state.user,
  devices: state.devices,
});

const Link = ({ uri = "/", children, icon = "help-circle" }) =>
  <NavLink exact to={uri} className="topbar-menu__link" activeClassName="topbar-menu__link--active">
    <span className={"topbar-menu__link--icon icon__" + icon}></span>
    <span className="topbar-menu__link--text">{children}</span>
  </NavLink>

class Header extends React.Component {
  render() {
    const { username, avatar, balance } = this.props.user;
    const mobile = this.props.devices.mobile;
    const deposit = () => this.props.dispatch(deployPopup("deposit"));
    return (
      <div className="topbar">
        <Switch>
          <Route exact path="/"></Route>
          <Route>
            <div className="topbar__somethong">
              <Logo mobile={mobile} />
              <Panel />
            </div>
          </Route>
        </Switch>
        {mobile ? <Logo mobile={mobile} /> : false}
        <nav className="topbar-menu">
          <Link icon="home">Главная</Link>
          <Link uri="/support" icon="headphones">Поддержка</Link>
          <Link uri="/faq" icon="help-circle">FAQ</Link>
          <Link uri="/market" icon="bag">Маркет</Link>
        </nav>
        {mobile ? <div className="topbar-profile">
          <div className="flex aligned">
            <Button color="green" icon="dollar" onClick={() => deposit()}>Пополнить</Button>
            <img src={avatar} alt="avatar" className="topbar-profile__avatar" />
            <div className="topbar-profile__column">
              <div className="topbar-profile__username">{username}</div>
              <div className="topbar-profile__balance"><Price>{balance}</Price></div>
              <NavLink className="ghost" to="/profile" activeClassName="" />
            </div>
          </div>
        </div> : <div className="topbar-profile">
            <div className="flex aligned">
              <div className="topbar-profile__username">{username}</div>
              <img src={avatar} alt="avatar" className="topbar-profile__avatar" />
              <div className="topbar-profile__balance"><Price>{balance}</Price></div>
              <NavLink className="ghost" to="/profile" activeClassName="" />
            </div>
            <Button color="green" icon="dollar" onClick={() => deposit()}>Пополнить</Button>
            <div className="topbar-profile__exit">
              <span className="icon__exit"></span>
            </div>
          </div>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);