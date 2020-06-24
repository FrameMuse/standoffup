import React from "react";
import { Column, Price, Button } from "./components";

const Bet = ({ color = "myGlass", childer = "13.51" }) => <div className="game-live-bets__bet" style={{ "--color": `var(--color-${color})` }}>{childer}x</div>;
const Weapons = ({ list }) => {
  const extended = list.length > 3;
  return (
    <div className="game-matches__weapons">
      {(extended ? list.slice(0, 3) : list).map((source, index) => <img src={source} key={"game-matches__weapon_" + index} alt="weapon" className="game-matches__weapon" />)}
      {extended ? <div className="game-matches__weapons-count">+{list.length - 3}</div> : false}
    </div>
  );
};
const Match = ({ price, status, weapons, avatar }) => (
  <div className="game-matches__match">
    <img src={avatar} alt="avatar" className="game-matches__avatar" />
    <div className="game-matches__bet"><Price>{price}</Price></div>
    <Weapons list={weapons} />
    <div className="game-matches__status">{status}</div>
  </div>
);

class PagePart extends React.Component {
  UNSAFE_componentWillMount() {
    this.state = {
      options: [1.1, 1.2, 1.5, 2.0, 2.0],
      chosen: 2
    };
  }
  render() {
    const chooseOption = index => this.setState({ ...this.state, chosen: index });
    return (
      <React.Fragment>
        <div className="game">
          <div className="game-setup">
            <div className="game-setup-weapon">
              <img src="/assets/img/mp7.png" alt="gun" className="game-setup-weapon__image" />
              <div className="game-setup-weapon__name">
                <span className="game-setup-weapon__name--0">MP7</span>
                <span className="game-setup-weapon__name--1">2 Years Red</span>
              </div>
            </div>
            <div className="game-setup-bet">
              <div className="game-setup-bet__title">Сделать ставку</div>
              <div className="game-setup-bet__actions">
                <input type="tel" className="game-setup-bet__auto-draw" defaultValue="2.00" />
                <Button color="blue" note={<Price>75.21</Price>}>Начать</Button>
              </div>
              <div className="game-setup-bet__options">
                {this.state.options.map((option, index) => <div onClick={() => chooseOption(index)} key={"option_" + index} className={"game-setup-bet__option" + (this.state.chosen === index ? " game-setup-bet__option--chosen" : "")}>X{option}</div>)}
              </div>
            </div>
          </div>
          <div className="game-info">
            <div className="game-info__title">Статистика раунда</div>
            <Column icon="person">
              <span>506</span>
              <span>Игроки</span>
            </Column>
            <Column icon="dark-dollar">
              <span><Price>1 675.13</Price></span>
              <span>общий банк</span>
            </Column>
            <Column icon="pistol">
              <span>561</span>
              <span>Скины</span>
            </Column>
          </div>
          <div className="game-live-bets">
            <Bet color="myGlass">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="orange">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="leaf">13.51x</Bet>
            <Bet color="myGlass">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="orange">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="leaf">13.51x</Bet>
            <Bet color="myGlass">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="orange">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="leaf">13.51x</Bet>
            <Bet color="myGlass">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="lipstick">13.51x</Bet>
            <Bet color="orange">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="blood">13.51x</Bet>
            <Bet color="leaf">13.51x</Bet>
          </div>
          <div className="game-matches">
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
            <Match weapons={["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"]} price="567.21" status="В игре" avatar="/assets/img/avatar.png" />
          </div>
        </div>
        <footer>
          <a href="#link">Пользовательское соглашение</a>
          <a href="#link">Проверка честной игры</a>
        </footer>
      </React.Fragment>
    )
  }
}

export default PagePart;