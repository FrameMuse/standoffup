import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchLang } from "./reducers/lang";
import { toggleItem, toggleAll } from "./reducers/inventory";
import { toggleMobileMenu } from "./reducers/game";

export const Logo = ({ mobile }) => {
    const dispatch = useDispatch();
    const toggleMenu = () => dispatch(toggleMobileMenu());
    return (
        <div className="topbar-logo">
            <span className="topbar-logo__icon"></span>
            {!mobile ? <span className="topbar-logo__text">standoffup</span> : <div className="topbar-menu-trigger-icon" onClick={toggleMenu}></div>}
            <Link to="/" className="ghost" />
        </div>
    );
};

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

export class Count {
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
        return new Count(value, toFixed, currency).value;
    }
}

export const Price = ({ children = 0, toFixed = 2 }) => {
    const currency = useSelector(state => state.lang.list.currency);
    return <>{Count.get(children, toFixed, currency)}</>;
};

export const Weapon = ({ data = {}, picked, onClick }) => {
    const { RNColor = "lipstick", price = 0, imageSrc = "/assets/img/gun.png", name = "???", alias="???", ball = false | { content: String | Number, note: String } } = data;
    return (
        <div className={picked ? "weapon weapon--picked" : "weapon"} onClick={onClick}>
            <div className="weapon__title">
                <span className="weapon__title--text"><Price>{price}</Price></span>
                <span className="weapon__title--circle" style={{ "background": `var(--color-${RNColor})` }}></span>
            </div>
            <img className="weapon__image" alt="weapon gun" src={imageSrc} />
            {ball ? (
                <div className="weapon__wrap-content">
                    <div className="weapon__name">
                        <span className="weapon__name--0">{alias}</span>
                        <span className="weapon__name--1">{name}</span>
                    </div>
                    <div className="weapon__ball">
                        <span className={"weapon__ball--content" + (isNaN(ball.content) ? ` icon__${ball.content}` : "")}>{!isNaN(ball.content) ? ball.content : false}</span>
                        <span className="weapon__ball--note">{ball.note}</span>
                    </div>
                </div>
            ) : (
                <div className="weapon__name">
                    <span className="weapon__name--0">{alias}</span>
                    <span className="weapon__name--1">{name}</span>
                </div>
            )}
        </div>
    );
};

export const Button = ({ onClick, color, children, icon, note }) => (
    <button onClick={onClick} className={color ? "button button--" + color : "button"}>
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

export const CompactAccount = () => {
    const inventory = useSelector(state => state.inventory);
    const lang = useSelector(state => state.lang.list);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const weapons = inventory.weapons;
    const allPicked = inventory.allPicked;
    const weapon_picked = weapons.filter(weapon => weapon.picked || allPicked);
    const atLeastChoosen = weapon_picked.length;
    const pickedTotal = weapon_picked.reduce((prev, weaponCurr) => prev + weaponCurr.price, 0);
    const pickWeapon = index => dispatch(toggleItem(index));
    const pickAll = _ => dispatch(toggleAll());
    return (
        <div className="compact-account">
            <div className="compact-account__details">
                <Column>
                    <span><Price>{user.balance}</Price></span>
                    <span>{lang.sidebar.inventory_info.balance}</span>
                </Column>
                <Column>
                    <span><Price>{pickedTotal}</Price></span>
                    <span>{lang.sidebar.inventory_info.selected}</span>
                </Column>
                <Column>
                    <span>{lang.sidebar.inventory_info.all}</span>
                    <div>
                        <span>{lang.sidebar.inventory_info.selectAll}</span>
                        <Checkbox onChange={() => pickAll()} />
                    </div>
                </Column>
            </div>
            <div className="compact-account__inventory">
                <div className="compact-account__inventory--inner">
                    {weapons.map((weapon, index) => <Weapon data={weapon} picked={weapons[index]["picked"] || allPicked} key={"inventory_weapon_" + index} onClick={() => pickWeapon(index)} />)}
                </div>
                <div className={"compact-account__buttons" + (!atLeastChoosen ? " hidden" : "")}>
                    <Button color="blue" icon="refresh">Обменять</Button>
                    <Button color="green" icon="chevron-down-double">Получить</Button>
                </div>
            </div>
        </div>
    );
};

export const Arraize = (array) => array instanceof Array ? array : [array];

export class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            currentIndex: 0,
            values: Arraize(props.children).map(child => child.props.children)
        }
    }

    defaultStart(index = this.state.currentIndex) {
        const synEvent = {
            target: {
                name: this.props.name ? this.props.name : null,
                value: this.state.values[index]
            }
        };
        if (typeof this.props.onChange == "function") this.props.onChange(synEvent);
        if (typeof this.props.onStart == "function") this.props.onStart(synEvent);
    }

    show() {
        this.setState({
            show: !this.state.show
        });
    }

    select(index) {
        this.defaultStart(index);
        this.setState({
            currentIndex: index,
            show: false
        });
    }

    render() {
        const { currentIndex, values, show } = this.state;
        return (
            <div className={`selector ${show ? "selector--active" : ""}`}>
                <div className="selector__current" onClick={() => this.show()}>{values[currentIndex]}</div>
                <div className="selector__menu">
                    {values.map((value, index) => {
                        if (currentIndex === index) return false;
                        return (
                            <span className="selector__option" onClick={() => this.select(index)} key={`selector_option_${index}`}>
                                {value}
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
}
