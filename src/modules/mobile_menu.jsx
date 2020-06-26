import React from "react";
import { connect } from "react-redux";
import { Panel, Price, Button } from "../components";
import { NavLink } from "react-router-dom";
import { toggleMobileMenu } from "../reducers/game";

const mapStateToProps = state => ({
    user: state.user,
    game: state.game,
});

class MobileMenu extends React.Component {
  render() {
    const { username, avatar, balance } = this.props.user;
    const show = this.props.game.mobileMenu;
    const toggleMenu = () => this.props.dispatch(toggleMobileMenu());
    return (
        <div className={show ? "mobile-menu" : "hidden"}>
            <div className="mobile-menu__top">
                <Panel />
                <div className="mobile-menu__close icon" onClick={toggleMenu}></div>
            </div>
            <nav className="mobile-menu__menu">
                <NavLink className="mobile-menu__link" exact to="/">Главная</NavLink>
                <NavLink className="mobile-menu__link" to="/support">Поддрежка</NavLink>
                <NavLink className="mobile-menu__link" to="/faq">FAQ</NavLink>
            </nav>
            <div className="mobile-menu__profile">
                <div className="flex aligned">
                    <Button color="green" icon="dollar">Пополнить</Button>
                    <img src={avatar} alt="avatar" className="topbar-profile__avatar" />
                    <div className="topbar-profile__column">
                        <div className="topbar-profile__username">{username}</div>
                        <div className="topbar-profile__balance"><Price>{balance}</Price></div>
                        <NavLink className="ghost" to="/profile" activeClassName="" />
                    </div>
                    <div className="topbar-profile__exit">
                        <span className="icon__exit"></span>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MobileMenu);