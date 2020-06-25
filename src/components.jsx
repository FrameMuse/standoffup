import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchLang } from "./reducers/lang";

export class Logo extends React.Component {
    render() {
        return (
            <div className="topbar-logo" href="/13">
                <span className="topbar-logo__icon"></span>
                <span className="topbar-logo__text">standoffup</span>
                <Link to="/" className="ghost" />
            </div>
        )
    }
}

export const Panel = () => {
    const lang = useSelector(state => state.lang.list);
    const dispatch = useDispatch();
    const toggleLang = () => dispatch(switchLang(lang.topbar.langs[1]));
    return (
        <div className="topbar-panel">
            <div className="topbar-panel__button" onClick={() => toggleLang()}>{lang.topbar.langs[0]}</div>
            <div className="topbar-panel__button">
                <span className="icon__volume"></span>
            </div>
        </div>
    )
};

export const Column = ({ children, icon }) => (
    <div className={icon ? "column column--0" : "column"}>
        <span className="column__text">
            {icon ? <span className={"column__icon icon__" + icon}></span> : false}
            {children[0].props.children}
        </span>
        <span className="column__anotation">{children[1].props.children}</span>
    </div>
);

export const Checkbox = ({ onChange }) => (
    <label className="checkbox">
        <input className="checkbox__input" onChange={onChange} type="checkbox" />
        <div className="checkbox__line"></div>
        <div className="checkbox__circle"></div>
    </label>
);

export class count {
    constructor(number, toFixed = 2, currency = "₽") {
        if (isNaN(number)) {
            const numberParse = +number.replace(/[^0-9$.,]/g, "");
            number = isNaN(numberParse) ? 0 : numberParse;
        }
        number = number === "" ? 0 : currency === "$" ? number * 0.01 : number
        this.pureValue = Number.parseFloat(number);
        this.value = this.pureValue.toFixed(toFixed) + " " + currency;        
    }

    static get(value, toFixed = 2, currency) {
        return new count(value, toFixed, currency).value;
    }
}

export const Price = ({ children, toFixed = 2 }) => {
    const currency = useSelector(state => state.lang.list.currency);
    return <>{count.get(children, toFixed, currency)}</>;
};

export const Weapon = ({ data = {}, picked, onClick }) => {
    const { RNColor = "lipstick", price = 0, imageSrc = "/assets/img/gun.png", name = "???", alias="???" } = data;
    return (
        <div className={picked ? "weapon weapon--picked" : "weapon"} onClick={onClick}>
            <div className="weapon__title">
                <span className="weapon__title--text"><Price>{price}</Price></span>
                <span className="weapon__title--circle" style={{ "background": `var(--color-${RNColor})` }}></span>
            </div>
            <img className="weapon__image" alt="weapon gun" src={imageSrc} />
            <div className="weapon__name">
                <span className="weapon__name--0">{alias}</span>
                <span className="weapon__name--1">{name}</span>
            </div>
        </div>
    );
};

export const Button = ({ onClick, color, children, icon, note }) => (
    <button className={color ? "button button--" + color : "button"}>
        <span className="button__text">{children}</span>
        {icon ? <span className={"button__icon icon__" + icon}></span> : false}
        {note ? <span className="button__note">{note}</span> : false}
    </button>
);

export class FAQ extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            root: document.getElementById("faq_" + this.props.key),
        };
    }

    static clause({ summary, children }) {
        const deploy = (synEvent) => {
            const target = synEvent.target;
            const parent = target.parentNode;
            const contentElement = parent.querySelector(".faq__content");
            const height = contentElement.scrollHeight;

            contentElement.style = `--height: ${height}px`;
            parent.classList.toggle("faq__clause--deployed");
        };
        return (
            <div className="faq__clause" onClick={deploy}>
                <div className="faq__summary">{summary}</div>
                <div className="faq__content">
                    <div className="faq__content--inner">{children}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="faq">{this.props.children}</div>
        );
    }
}