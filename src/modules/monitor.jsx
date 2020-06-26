import React from "react";

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));

async function* gameGenerator(state) {
  for (let index = 0; index < state.itters; index++) {
    await delay(state.delay);
    yield state = {
      ...state,
      hash: state.hash + state.accel,
      delay: state.delay > state.paceDelay ? index % state.each === 0 ? state.delay - state.paceDelay : state.delay : state.paceDelay,
      axes: state.hash >= state.axes ? state.axes * 2 : state.axes
    };
  }
}


class Monitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hash: 1.25,
      itters: 17 * 100,
      accel: 0.01,
      delay: 1000,
      paceDelay: 35,
      each: 2,
      axes: 4
    };

    this.stateDefault = this.state;
  }
  async start(prefs = {}) {
    for await (let state of gameGenerator({ ...this.state, ...prefs })) {
      this.setState(state);
    }
  }
  clear() {
    this.setState(this.stateDefault);
  }
  xs({ children }) {
    return (
      <span className="monitor__Snumber">{children}</span>
    );
  }
  render() {
    const indicator = (100 / (this.state.axes)) * this.state.hash;
    const xses = [this.state.axes, this.state.axes / 2, this.state.axes / 4];
    return (
      <div className="monitor" onClick={async () => {await this.start(); this.clear()}}>
        <div className="monitor__axes">
          <div className="monitor__axis">
            <this.xs>{xses[0]}.00x</this.xs>
            <this.xs>{xses[1] + xses[2]}.00x</this.xs>
            <this.xs>{xses[1]}.00x</this.xs>
            <this.xs>{xses[2]}.00x</this.xs>
          </div>
          <div className="monitor__axis">
            <this.xs>{xses[0]}.00x</this.xs>
            <this.xs>{xses[1] + xses[2]}.00x</this.xs>
            <this.xs>{xses[1]}.00x</this.xs>
            <this.xs>{xses[2]}.00x</this.xs>
          </div>
        </div>
        <span className="monitor__Bnumber">{this.state.hash.toFixed(2)}x</span>
        <div className="monitor__indicator" style={{ height: `calc(${indicator}% - 2em)` }}></div>
      </div>
    )
  }
}

export default Monitor; 