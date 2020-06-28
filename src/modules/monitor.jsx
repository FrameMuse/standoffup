import React from "react";

class Monitor extends React.Component {
  constructor(props) {
    super(props);

    this.stateDefault = this.state = {
      hash: 1.25,
      axes: 4
    };
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
    
    const update = () => this.setState({ hash: 5, axes: 8 });

    return (
      <div className="monitor" onClick={() => update()}>
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