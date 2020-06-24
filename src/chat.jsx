import React from "react";
import { connect } from "react-redux";
import { toggleChat } from "./reducers/chat";

const mapStateToProps = state => ({
  self: state.chat
});

const Message = ({ data }) => {
  const { username, message, time, avatar } = data;
  return (
    <div className="chat-message">
      <img src={avatar} alt="avatar" className="chat-message__avatar" />
      <div className="chat-message__info">
        <div className="chat-message__title">
          <span className="chat-message__title--username">{username}</span>
          <span className="chat-message__title--time">{time}</span>
        </div>
        <div className="chat-message__message">{message}</div>
      </div>
    </div>
  );
};

class Chat extends React.Component {
  render() {
    const messages = this.props.self.messages;
    const hide = () => this.props.dispatch(toggleChat());
    return (
      <div className={this.props.self.hidden ? "chat chat--hidden" : "chat"}>
        <div className="chat-top">
          <div className="chat__header">
            <span className="chat__header--title">Чат</span>
            <a href="/asd" className="chat__header--anchor">Правила игры</a>
          </div>
          <div className="chat__online">
            <div className="chat__online--title">
              <span className="chat__online--circle"></span>
              <span>678</span>
            </div>
            <span className="chat__online--text">online</span>
          </div>
          <div className="chat__hide" onClick={() => hide()}>
            <span className="icon__chevron-down"></span>
          </div>
        </div>
        <div className="chat-field">
          {messages.map((message, index) => <Message key={"chat_message_" + index} data={message} />)}
        </div>
        <div className="chat-bottom">
          <div className="chat-send">
            <input type="text" placeholder="Ввидите сообщение..." className="chat-send__input" />
            <div className="chat-send__submit">
              <span className="icon__paper-plane"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Chat);