import React from "react";
import { Logo, Panel, Column, Price, Checkbox, Weapon, Button } from "../components";
import Monitor from "../modules/monitor";
import { connect } from "react-redux";
import { toggleItem, toggleAll } from "../reducers/inventory";

const mapStateToProps = state => ({
  inventory: state.inventory,
  user: state.user,
  lang: state.lang,
});

class SidebarHome extends React.Component {
  render() {
    const lang = this.props.lang.list;
    const weapons = this.props.inventory.weapons;
    const allPicked = this.props.inventory.allPicked;
    const weapon_picked = weapons.filter(weapon => weapon.picked || allPicked);
    const atLeastChoosen = weapon_picked.length;
    const pickedTotal = weapon_picked.reduce((prev, weaponCurr) => prev + weaponCurr.price, 0);
    const pickWeapon = index => this.props.dispatch(toggleItem(index));
    const pickAll = _ => this.props.dispatch(toggleAll());
    return (
      <div className="sidebar-home">
        <div className="topbar">
          <Logo />
          <Panel />
        </div>
        <Monitor />
        <div className="compact-account">
          <div className="compact-account__details">
            <Column>
              <span><Price>{this.props.user.balance}</Price></span>
              <span>{lang.sidebar.inventory_info.balance}</span>
            </Column>
            <Column>
              <span><Price>{pickedTotal}</Price></span>
              <span>{lang.sidebar.inventory_info.selected}</span>
            </Column>
            <Column>
              <span>{lang.sidebar.inventory_info.all}</span>
              <div>
                <span>{lang.sidebar.inventory_info.selectAll}</span>
                <Checkbox onChange={() => pickAll()} />
              </div>
            </Column>
          </div>
          <div className="compact-account__inventory">
            <div className="compact-account__inventory--inner">
              {weapons.map((weapon, index) => <Weapon data={weapon} picked={weapons[index]["picked"] || allPicked} key={"inventory_weapon_" + index} onClick={() => pickWeapon(index)} />)}
            </div>
            <div className={"compact-account__buttons" + (!atLeastChoosen ? " hidden" : "")}>
              <Button color="blue" icon="refresh">Обменять</Button>
              <Button color="green" icon="chevron-down-double">Получить</Button>
            </div>
          </div>
        </div>
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