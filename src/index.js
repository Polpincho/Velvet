import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Time from "react-time";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Of extends React.Component {
  nOf = "1234";
  nBom = "1234";
  UnitTot = "10";
  UnitProd = "5";
  startTime = "00:00";
  endTime = "01:00";
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="line" onClick={() => alert("click")}>
        echo(this.nOf)
      </button>
    );
  }
}

class ProdLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.OFs = [Of, Of, Of];
    this.OFs[0] = Of;
  }

  renderOfs() {
    var outs = [];
    for (var i = 0; i < this.OFs.length; i++) {
      outs.push(<Of />);
    }
    return outs;
  }

  render() {
    return <div className="board-row">{this.renderOfs()}</div>;
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
    return <ProdLine />;
  }

  render() {
    const status = "Example";

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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Dashboard />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
