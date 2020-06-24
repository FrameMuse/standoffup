import React from "react";
import { Logo, Panel, Column, Price, Checkbox, Weapon, Button } from "./components";
import Monitor from "./modules/monitor";
import { connect } from "react-redux";
import { toggleItem, toggleAll } from "./reducers/inventory";

class Side extends React.Component {
  render() {
    const weapons = this.props.inventory.weapons;
    const allPicked = this.props.inventory.allPicked;
    const atLeastChoosen = weapons.filter(weapon => weapon.picked).length || allPicked;
    const pickWeapon = index => this.props.dispatch(toggleItem(index));
    const pickAll = _ => this.props.dispatch(toggleAll());
    return (
      <React.Fragment>
        <div className="topbar">
          <Logo />
          <Panel />
        </div>
        <Monitor />
        <div className="compact-account">
          <div className="compact-account__details">
            <Column>
              <span><Price>0.30</Price></span>
              <span>баланс</span>
            </Column>
            <Column>
              <span><Price>70.21</Price></span>
              <span>выбрано</span>
            </Column>
            <Column>
              <span>Всё</span>
              <div>
                <span>выбрать всё</span>
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
          <div className="annouce-event__text">Бесплатный нож</div>
          <div className="annouce-event__time">00:02:21</div>
          <div className="annouce-event__button">
            <span className="icon__chevron-down"></span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(mapStateToProps)(Side);