import React from "react";
import { connect } from "react-redux";
import { Button, Price } from "../components";
import { deployPopup, togglePopup } from "../reducers/popup";

const mapStateToProps = state => ({
  self: state.popup,
});

class Popup extends React.Component {
  window(name, props = { events: [], promo: 0 }, toggle) {
    switch (name) {
      case "sell":
        return {
          title: "Подтверждение продажи",
          description: <>Вы действительно хотите продать этот предмет за <span className="unmarked"><Price>{props.price}</Price></span> ?</>,
          content: <div className="popup-buttons">
            <Button color="blue" onClick={props.events[0]}>Да</Button>
            <Button onClick={toggle}>Нет</Button>
          </div>,
          showHelp: true,
        };
      case "wd_error_0":
        return {
          title: "Ошибка вывода предмета",
          description: "Увы, данный предмет недоступен для вывода. Его цена на рынке Standoff 2 менее 25 голды.Подробнее читайте в FAQ.",
          content: false,
          showHelp: true,
        };
      case "wd_error_1":
        return {
          title: "Ошибка вывода предмета",
          description: false,
          content: <form onSubmit={(e) => { e.preventDefault(); props.events[0](e.nativeEvent); toggle() }} class="change-avatar"><div class="change-avatar__content"><label class="change-avatar__add"><input type="file" name="avatar" /><span class="change-avatar__add--icon"></span></label><div class="change-avatar__text">Для вывода предмета вам необходимо установить аватарку как в вашем Standoff 2 аккаунте. Более подробно читайте в FAQ.</div></div><button type="submit" class="change-avatar__button">Сохранить</button></form>,
          showHelp: true
        };
      case "deposit":
        return {
          title: "Пополнение",
          description: "Для пополнения баланса вы будете премещены на сайт платёжной системы",
          content: (
            <div className="popup-deposit">
              <div className="popup-deposit__actions" promo={props.promo ? `+${props.promo}% к пополнению` : undefined}>
                <input className="popup-deposit__input" defaultValue="100" />
                <input className="popup-deposit__input" defaultValue="Промокод" />
                <Button color="blue">Подтвердить</Button>
              </div>
              <div className="popup-deposit__note">Поставить в никнейм "<span className="marked">standoffup.com</span>" и получи бонус <span className="marked">10%</span> к пополнению</div>
              <img src="/assets/img/paysys.png" alt="pay systems" className="popup-deposit__payes" />
            </div>
          ),
          showHelp: false,
        };
    
      default:
        console.log("Wrong popup name!");
        return {};
    }
  }
  toggle() {
    this.props.dispatch(togglePopup());
  }
  render() {
    const toggle = () => this.toggle();
    const state = this.window(this.props.self.name, { ...this.props.self.props }, toggle);
    return (
      <div className={this.props.self.show ? "popup popup--show" : "popup"}>
        <div className="popup__cover" onClick={toggle}></div>
        <div className="popup-window">
          <div className="popup-window__header">
            <span className="popup-window__title">{state.title}</span>
            <span className="popup-window__close icon" onClick={toggle}></span>
          </div>
          {state.description ? <div className="popup-window__description">
            {state.description}
          </div> : false}
          {state.content ? <div className="popup-window__content">
            {state.content}
          </div> : false}
          {state.showHelp ? <div className="popup-window__help">
            <>Остались вопросы? - Пишите в <span className="marked">группу поддержки ВК</span></>
          </div> : false}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Popup);