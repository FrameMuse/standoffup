import React from "react";
import { connect } from "react-redux";
import { Selector, Weapon, Count } from "../components";

const mapStateToProps = state => ({
  self: state.market,
  inventory: state.inventory,
  lang: state.lang
});

class Market extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weapon_name: "",
      price_from: "",
      price_to: "",
      rareness: "",
      type: "",
      hasOnChangeEvent: props.onChange !== undefined,
    };
  }
  onChange(target) {
    const data = {
      ...this.state,
      [target.name]: target.value
    };
    this.setState(data);
    if (this.state.hasOnChangeEvent) {
      this.props.onChange.apply(data, [data]);
    }
  }
  render() {
    const weapons = this.props.inventory.weapons;
    const num = num => Count.get(num, 0, this.props.lang.list.currency);
    return (
      <div className="page-market">
        <div className="page-market__side">
          <input className="page-market__input" name="weapon_name" onChange={(e) => this.onChange(e.target)} value={this.state.weapon_name} placeholder="Название предмета" />
          <div className="page-market__price">
            <input className="page-market__input" name="price_from" onChange={(e) => this.onChange(e.target)} value={num(this.state.price_from)} placeholder="Цена от" />
            <input className="page-market__input" name="price_to" onChange={(e) => this.onChange(e.target)} value={num(this.state.price_to)} placeholder="До" />
          </div>
          <div className="page-market__selector">
            <span className="page-market__selector--text">Риритетность</span>
            <Selector onChange={(e) => this.onChange(e.target)} name="rareness">
              <option>Все</option>
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </Selector>
          </div>
          <div className="page-market__selector">
            <span className="page-market__selector--text">Тип</span>
            <Selector onChange={(e) => this.onChange(e.target)} name="type">
              <option>Все</option>
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </Selector>
          </div>
        </div>
        <div className="page-market__content">
          {weapons.map((weapon, index) => <Weapon data={{ ...weapon, ball: { content: 2, note: "Осталось" } }} key={"market_weapon" + index} />)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Market);