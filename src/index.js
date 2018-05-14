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
  //var lines = [];

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
    var numrows = 3;
    for (var i = 0; i < numrows; i++) {
      //rows.push("<div className="board-row">{this.renderProdLine(i)}</div>");
    }
    return <div />;
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
