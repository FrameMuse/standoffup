import React from "react";
import { connect } from "react-redux";
import { Column, Price, Button } from "../components";
import Monitor from "../modules/monitor";

const Hash = ({ color = "myGlass", children = "13.51" }) => <div className="game-live-bets__bet" style={{ "--color": `var(--color-${color})` }}>{children}x</div>;
export const Weapons = ({ list, cut = 3 }) => {
  const extended = list.length > cut;
  return (
    <div className="game-matches__weapons">
      {(extended ? list.slice(0, cut) : list).map((source, index) => <img src={source} key={"game-matches__weapon_" + index} alt="weapon" className="game-matches__weapon" />)}
      {extended ? <div className="game-matches__weapons-count">+{list.length - cut}</div> : false}
    </div>
  );
};
const Match = ({ data }) => {
  const { price, status, weapons, avatar, props = { hash: 2.97, sum: 167.41 } } = data;
  let finish;
  let matchAdd;
  switch (status) {
    case "playing":
      finish = <div className="game-matches__status">В игре</div>;
      break;
    case "won":
      finish = <div className="game-matches__won">
        <div className="game-matches__won--sum"><Price>{props.sum}</Price></div>
        <div className="game-matches__won--hash">{props.hash}x</div>
      </div>;
      matchAdd = " game-matches__match--won";
      break;
    case "loss":
      finish = <div className="game-matches__loss">{props.hash}x</div>;
      matchAdd = " game-matches__match--loss";
      break;
    default: break;
  }
  return (
    <div className={"game-matches__match" + (matchAdd ? matchAdd : "")}>
      <img src={avatar} alt="avatar" className="game-matches__avatar" />
      <div className="game-matches__bet"><Price>{price}</Price></div>
      <Weapons list={weapons} />
      {finish}
    </div>
  );
};
const mapStateToProps = state => ({
  game: state.game,
  devices: state.devices,
});

class Home extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState({
      options: [1.1, 1.2, 1.5, 2.0, 2.0],
      chosen: 2
    });
  }
  render() {
    const game = this.props.game;
    const weapon = this.props.game.weapon;
    const mobile = this.props.devices.mobile;
    const chooseOption = index => this.setState({ ...this.state, chosen: index });
    return (
      <React.Fragment>
        <div className="game">
          {mobile ? <Monitor /> : false}
          {mobile ? <div className="game-live-bets">
            {game.hashes.map((hash, index) => <Hash key={"hash_" + index} color={hash.color}>{hash.value}</Hash>)}
          </div> : false}
          <div className="game-setup">
            <div className="game-setup-weapon">
              <img src={weapon.source} alt="gun" className="game-setup-weapon__image" />
              <div className="game-setup-weapon__name">
                <span className="game-setup-weapon__name--0">{weapon.name}</span>
                <span className="game-setup-weapon__name--1">{weapon.alias}</span>
              </div>
            </div>
            <div className="game-setup-bet">
              <div className="game-setup-bet__title">Сделать ставку</div>
              <div className="game-setup-bet__actions">
                <input type="tel" className="game-setup-bet__auto-draw" defaultValue="2.00" />
                <Button color="blue" note={<Price>{game.bet}</Price>}>Начать</Button>
              </div>
              <div className="game-setup-bet__options">
                {this.state.options.map((option, index) => <div onClick={() => chooseOption(index)} key={"option_" + index} className={"game-setup-bet__option" + (this.state.chosen === index ? " game-setup-bet__option--chosen" : "")}>X{option}</div>)}
              </div>
            </div>
          </div>
          <div className="game-info">
            {!mobile ? <div className="game-info__title">Статистика раунда</div> : false}
            <Column icon="person">
              <span>{game.stats.players}</span>
              <span>Игроки</span>
            </Column>
            <Column icon="dark-dollar">
              <span><Price>{game.stats.total}</Price></span>
              <span>общий банк</span>
            </Column>
            <Column icon="pistol">
              <span>{game.stats.skins}</span>
              <span>Скины</span>
            </Column>
          </div>
          {!mobile ? <div className="game-live-bets">
            {game.hashes.map((hash, index) => <Hash key={"hash_" + index} color={hash.color}>{hash.value}</Hash>)}
          </div> : false}
          <div className="game-matches">
            {game.matches.map((match, index) => <Match key={"match_" + index} data={match} />)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Home);