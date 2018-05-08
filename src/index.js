import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Time from "react-time";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ProdLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="line" onClick={() => alert("click")}>
        {this.props.value}
      </button>
    );
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: Array(9).fill(null)
    };
  }

  renderProdLine(i) {
    return <ProdLine value={this.state.lines[i]} />;
  }

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">{this.renderProdLine(1)}</div>
        <div className="board-row">{this.renderProdLine(2)}</div>
        <div className="board-row">{this.renderProdLine(3)}</div>
        <div className="board-row">{this.renderProdLine(4)}</div>
        <div className="board-row">{this.renderProdLine(5)}</div>
        <div className="board-row">{this.renderProdLine(6)}</div>
        <div className="board-row">{this.renderProdLine(7)}</div>
        <div className="board-row">{this.renderProdLine(8)}</div>
        <div className="board-row">{this.renderProdLine(9)}</div>
        <div className="board-row">{this.renderProdLine(10)}</div>
        <div className="board-row">{this.renderProdLine(11)}</div>
        <div className="board-row">{this.renderProdLine(12)}</div>
      </div>
    );
  }
}
