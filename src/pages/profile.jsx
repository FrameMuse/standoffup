import React from "react";
import { Price, Button } from "../components";
import { Weapons } from "../pages/home";
import { connect } from "react-redux";

const weaponsArray = ["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"];
const Match = ({ index, weapons, props = { bet: 123.12, hash: 2.97, sum: 167.41, weaponImage: "/assets/img/mp7.png" }, won = true, date }) => {
  return (
    <tr>
      <td>#{index}</td>
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

const mapStateToProps = state => ({
  user: state.user,
});

class Profile extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <React.Fragment>
        <div className="profile-another">
          <div className="profile-another__box">
            <div className="profile-another__container">
              <img src={user.avatar} alt="avatar" className="profile-another__avatar" />
              <div className="profile-another__username">
                <span>{user.username}</span>
                <span className="profile-another__username--balance"><Price>{user.balance}</Price></span>
              </div>
              <Button color="green" icon="dollar">Пополнить</Button>
            </div>
            <div className="profile-another__container profile-another__container--0">
              <div className="profile-box__title">
                <span className="profile-box__title--text">Аватар Standoff 2</span>
                <a href="#link" className="profile-box__title--link">Зачем?</a>
              </div>
              <div className="change-avatar">
                <div className="change-avatar__content">
                  <button className="change-avatar__add">
                    <span className="change-avatar__add--icon"></span>
                  </button>
                  <div className="change-avatar__text">Установите аватарку как в Вашем Standoff 2 аккаунте!</div>
                </div>
                <button className="change-avatar__button">Сохранить</button>
              </div>
            </div>
            <div className="profile-another__container profile-another__container--0">
              <div className="profile-box__title">
                <span className="profile-box__title--text">Рефералы</span>
                <span className="profile-box__title--number">{user.referals}</span>
              </div>
              <div className="referals">
                <img src={user.rankImage} className="referals__rank" alt="rank" />
                <div className="referals__progress">
                  <div className="referals__progress--text"><span className="referals__progress--orange">{user.leftTillLvlUp}</span> рефералов до {user.nextLvl} уровня</div>
                  <div className="referals__progress--bar">
                    <div className="referals__progress--line" style={{ width: user.referalProgress + "%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-switcher">
              <div className="profile-switcher__route profile-switcher__route--active">Статистика раундов</div>
              <div className="profile-switcher__route">История выводов</div>
            </div>
            <table className="profile-table">
              <thead>
                <tr>
                  <td>ID раунда</td>
                  <td>Ставка</td>
                  <td>Предметы</td>
                  <td>Выигрыш</td>
                  <td>Дата</td>
                </tr>
              </thead>
              <tbody>
                {Matches.map(match => <Match won={match.won} date={match.index} index={678909 + match.index} key={678909 + match.index} weapons={weaponsArray} />)}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Profile);