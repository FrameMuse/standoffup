import React from "react";
import { Price } from "../components";
import { Weapons } from "../pages/home";

const weaponsArray = ["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"];
const Match = ({ key, weapons, props = { bet: 123.12, hash: 2.97, sum: 167.41, weaponImage: "/assets/img/mp7.png" }, won = true, date }) => {
  return (
    <tr>
      <td>#{key}</td>
      <td>
        <div className="game-matches__bet"><Price>{props.bet}</Price></div>
      </td>
      <td>
        <div className="flex aligned">
          <Weapons cut="2" list={weapons} />
          {won ? <div className="game-matches__won">
            <div className="game-matches__won--sum"><Price>{props.sum}</Price></div>
            <div className="game-matches__won--hash">{props.hash}x</div>
          </div> : <div className="game-matches__loss">{props.hash}x</div>}
        </div>
      </td>
      <td>
        <img src={props.weaponImage} alt="weapon" className="game-matches__weapon" />
      </td>
      <td>{date} дней назад</td>
    </tr>
  );
};
const Matches = Array(25).fill(0).map((v, index) => ({ index: index, won: index % 2 === 0 }));

class ProfileAnother extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-another">
          <div className="profile-another__box">
            <div className="profile-another__title">Профиль игрока</div>
            <div className="profile-another__container">
              <img src="/assets/img/jora.png" alt="avatar" className="profile-another__avatar" />
              <div className="profile-another__username">Георгий</div>
              <a href="https://vk.com/georgiymolchanov" className="profile-another__link">Профиль ВК</a>
            </div>
          </div>
          <table className="profile-table">
            <tr>
              <td>ID раунда</td>
              <td>Ставка</td>
              <td>Предметы</td>
              <td>Выигрыш</td>
              <td>Дата</td>
            </tr>
            {Matches.map(match => <Match won={match.won} date={match.index} key={678909 + match.index} weapons={weaponsArray} />)}
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileAnother;