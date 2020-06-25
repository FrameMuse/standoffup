import React from "react";
import { connect } from "react-redux";
import { Price } from "../components";
import { NavLink } from "react-router-dom";

const mapStateToProps = state => ({
  user: state.user
});

class Header extends React.Component {
  render() {
    const { username, avatar, balance } = this.props.user;
    return (
      <div className="topbar">
        <nav className="topbar-menu">
          <NavLink to="/" className="topbar-menu__link" activeClassName="topbar-menu__link--active">
            <span className="topbar-menu__link--icon icon__home"></span>
            <span className="topbar-menu__link--text">Главная</span>
          </NavLink>
          <NavLink to="/support" className="topbar-menu__link" activeClassName="topbar-menu__link--active">
            <span className="topbar-menu__link--icon icon__headphones"></span>
            <span className="topbar-menu__link--text">Поддержка</span>
          </NavLink>
          <NavLink to="/faq" className="topbar-menu__link" activeClassName="topbar-menu__link--active">
            <span className="topbar-menu__link--icon icon__help-circle"></span>
            <span className="topbar-menu__link--text">FAQ</span>
          </NavLink>
        </nav>
        <div className="topbar-profile">
          <div className="topbar-profile__username">{username}</div>
          <img src={avatar} alt="avatar" className="topbar-profile__avatar" />
          <div className="topbar-profile__balance"><Price>{balance}</Price></div>
          <button className="button button--green">
            <span className="button__text">Пополнить</span>
            <span className="button__icon icon__dollar"></span>
          </button>
          <div className="topbar-profile__exit">
            <span className="icon__exit"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);