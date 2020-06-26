import React from "react";
import { FAQ } from "../components";

class FAQPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="part-part__title">Часто задаваемые вопросы</div>
        <div className="part-part__content">
          <FAQ>
            <FAQ.clause summary="Совет для хорошей игры">
              Наш сайт очень требователен к хорошему и стабильному интернет соеденению, также нужен современный браузер. Рекомендуем: 1. Использовать браузеры Google Chrome / Opera 2. Отключать видео/
              трансляции на ютубе/twitch итд 3. Отключать онлайн музыку 4. Отключать демонстрацию экрана в Discord / Skype. Все это повышает ваш пинг, и из за этого могут быть лаги/задержки. Рекомендуем также 
              записывать игру на сайте в случае, если вы наблюдаете какие-либо лаги. В будущем запись можно будет предъявить для того, чтобы рассмотрели заявку на возврат.
          </FAQ.clause>
            <FAQ.clause summary="Как пополнить баланс на сайте?">

            </FAQ.clause>
            <FAQ.clause summary="Как вывести деньги с сайта?">

            </FAQ.clause>
            <FAQ.clause summary="Что за логотип другого сайта расположен сверху слева?">

            </FAQ.clause>
            <FAQ.clause summary="Почему нельзя выводить скин дешевле 25 голды?">

            </FAQ.clause>
          </FAQ>
        </div>
      </React.Fragment>
    )
  }
}

export default FAQPage