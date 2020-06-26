import React from "react";
import { Logo, Panel, CompactAccount } from "../components";
import Monitor from "../modules/monitor";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  lang: state.lang,
  devices: state.devices
});

class SidebarHome extends React.Component {
  render() {
    const lang = this.props.lang.list;
    const state = window.location.href.split("/")[3] === "";
    if (this.props.devices.mobile) return false;
    return (
      <div className={"sidebar-home" + (!state ? " hidden" : "")}>
        <div className="topbar">
          <Logo />
          <Panel />
        </div>
        <Monitor />
        <CompactAccount />
        <div className="annouce-event">
          <img src="/assets/img/knife.png" alt="knife" className="annouce-event__image" />
          <div className="annouce-event__text">{lang.sidebar.event_name}</div>
          <div className="annouce-event__time">00:02:21</div>
          <div className="annouce-event__button">
            <span className="icon__chevron-down"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SidebarHome);