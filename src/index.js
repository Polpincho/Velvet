import ReactDOM from "react-dom";
import React from "react";
import Rx from "rxjs";

//var dashboard = Dashboard(defaultLatitude, defaultLongitude);
import test1 from "./test1.js";
var timerElement = document.querySelector("#timer");
var buttonRefresh = document.querySelector("#button-refresh");

//-------------------------------------------------------------------COUNTER-------------------------------------------------------------------------

class Counter {
  constructor(value) {
    this.value = value;
  }
  tick() {
    this.value = this.value === 0 ? 60 : this.value - 1;
  }
  reset() {
    this.value = 60;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}

//----------------------------------------------------------------------OF--------------------------------------------------------------------------

class Of extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfs: props.numOf,
      BOM: props.bom,
      actunit: props.actunit,
      totunit: props.totunit,
      strtime: props.strtime,
      endtime: props.endtime,
      actunit: props.actunit
    };
  }

  render() {
    return (
      <div>
        <button type="button" class="btn">
          prev
        </button>
        <button type="button" class="btn">
          next pys
        </button>
      </div>
    );
  }
}

//---------------------------------------------------------------------LINE-------------------------------------------------------------------------

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfs: props.numLines,
      heigth: props.order,
      ofs: []
    };
  }

  addOf(of) {
    this.status.ofs[of.num] = of;
  }

  render() {
    return (
      <div>
        <button type="button" class="btn">
          prev
        </button>
        <button type="button" class="btn">
          nextpya
        </button>
      </div>
    );
  }
}

//-------------------------------------------------------------------DASHBOARD----------------------------------------------------------------------

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numlines: props.numLines,
      lines: []
    };
    for (var i = 0; i < this.state.numlines; ++i) {
      /*var line = props.lines[i];
      this.status.lines[line.name] = line;*/
      this.status.lines.push(<h1>123123 </h1>);
    }
  }

  render() {
    var row = [];
    for (var i = 0; i < this.state.numlines; ++i) {
      row.push(<div>{this.state.lines[i]}</div>);
    }
    return <div>{row}</div>;
  }
}

//-------------------------------------------------------------------       ----------------------------------------------------------------------
var { numlines, lines } = test1;

const dashBoard = <Dashboard numLines={numlines} lines={lines} />;
var counter = new Counter(60);

function updateLine(lines) {}

var fetch$ = Rx.Observable.ajax("" + "stations").map(e => e.response);

var timer$ = Rx.Observable.timer(0, 1000)
  .do(() => {
    timerElement.innerHTML = counter.getValue();
    counter.tick();
  })
  .filter(() => counter.getValue() + 1 === 60);

var refresh$ = Rx.Observable.fromEvent(buttonRefresh, "click").do(() => {
  counter.reset();
  timerElement.innerHTML = counter.getValue();
  counter.tick();
});

var updater$ = Rx.Observable.merge(timer$, refresh$)
  .switchMap(val => fetch$)
  .subscribe(lines => {
    updateLine(lines);
    ReactDOM.render(dashBoard, document.getElementById("dashboard"));
  });
