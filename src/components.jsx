import React from "react";
import { Link } from "react-router-dom";

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

export class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: false,
            lang: "RU"
        };
    }

    toggleVolume() {
        this.setState({
            ...this.state,
            volume: !this.state.valume
        });
    }

    toggleLang() {
        this.setState({
            ...this.state,
            lang: this.state.lang === "RU" ? "EN" : "RU"
        });
    }

    render() {
        return (
            <div className="topbar-panel">
                <div className="topbar-panel__button" onClick={() => this.toggleLang()}>{this.state.lang}</div>
                <div className="topbar-panel__button" onClick={() => this.toggleVolume()}>
                    <span className="icon__volume"></span>
                </div>
            </div>
        )
    }
}

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

export class Price extends React.Component {
    rice(number, toFixed = 2, currency = "₽") {
        if (isNaN(number)) {
            const numberParse = +number.replace(/[^0-9$.,]/g, "");
            number = isNaN(numberParse) ? 0 : numberParse;
        }
        number = number === "" ? 0 : number
        this.pureValue = Number.parseFloat(number);
        this.value = this.pureValue.toFixed(toFixed) + " " + currency;
    }

    get(value, toFixed = 2) {
        this.rice(value, toFixed);
        return this.value;
    }

    render() {
        return (
            <>{this.get(this.props.children)}</>
        )
    }
}

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