import ReactDOM from "react-dom";
import React from "react";
import Rx from "rxjs";

//var dashboard = Dashboard(defaultLatitude, defaultLongitude);
var test1 = {
  numLines: 7,
  lines: [
    {
      name: "Linia1",
      code: 0,
      numofs: 1,
      of: [
        {
          name: "Of1",
          codef: "0001",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        }
      ]
    },
    {
      name: "Linia2",
      code: 0,
      numofs: 2,
      of: [
        {
          name: "Of2",
          codef: "0002",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of3",
          codef: "0003",
          init: 2,
          final: 5,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia3",
      code: 0,
      numofs: 2,
      of: [
        {
          name: "Of4",
          codef: "0004",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of5",
          codef: "0005",
          init: 6,
          final: 8,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia4",
      code: 0,
      numofs: 4,
      of: [
        {
          name: "Of6",
          codef: "0006",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of7",
          codef: "0007",
          init: 2,
          final: 5,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of8",
          codef: "0008",
          init: 5,
          final: 6,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of9",
          codef: "0009",
          init: 7,
          final: 11,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia5",
      code: 0,
      numofs: 1,
      of: [
        {
          name: "Of10",
          codef: "0010",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia6",
      code: 0,
      numofs: 1,
      of: [
        {
          name: "Of11",
          codef: "0011",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia7",
      code: 0,
      numofs: 1,
      of: [
        {
          name: "Of12",
          codef: "0012",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        }
      ]
    }
  ]
};

export default test1;

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
      nameOf: props.name,
      BOM: props.code,
      actunit: props.actU,
      totunit: props.endU,
      strtime: props.initT,
      endtime: props.endT
    };
    this.key = props.id2;
  }

  render() {
    return <button>{this.state.nameOf}</button>;
  }
}

//---------------------------------------------------------------------LINE-------------------------------------------------------------------------

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.key2;
    this.state = {
      numofs: props.numofs,
      heigth: props.numLine,
      key2: props.key2,
      ofs: []
    };

    for (var i = 0; i < parseInt(this.state.numofs); ++i) {
      var of1 = props.ofs[i];
      this.state.ofs.push(of1);
    }
  }

  render() {
    var row = [];
    for (var i = 0; i < this.state.numofs; ++i) {
      var of1 = this.state.ofs[i];
      var nameof = of1.name;
      var codeof = of1.codef;
      var initof = of1.init;
      var endof = of1.final;
      var actuni = of1.uniactual;
      var enduni = of1.uniFinal;

      row.push(
        <Of
          id2={"Of" + codeof}
          name={nameof}
          code={codeof}
          initT={initof}
          endT={endof}
          actU={actuni}
          endU={enduni}
        />
      );
    }
    return <div key={this.state.key2}>{row}</div>;
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

    for (var i = 0; i < parseInt(this.state.numlines); ++i) {
      var line = props.lines[i];
      this.state.lines.push(line);
    }
  }

  render() {
    var row = [];
    for (var i = 0; i < this.state.numlines; ++i) {
      var line = this.state.lines[i];
      var numofs = line.numofs;
      var linename = line.name;
      var linecode = line.code;
      var ofs = line.of;
      row.push(
        <Line
          key={"Line" + i}
          numofs={numofs}
          lines={linename}
          numLine={i}
          ofs={ofs}
        />
      );
    }
    return <div>{row}</div>;
  }
}

//-------------------------------------------------------------------       ----------------------------------------------------------------------
var numlines = test1.numLines;
var lines = test1.lines;

var dashBoard = (
  <div>
    <Dashboard key="dash1" numLines={numlines} lines={lines} />
  </div>
);

var timebar = (
  <div>
    <timerElement />
  </div>
);

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
    ReactDOM.render(timebar, document.getElementById("timerbar"));
    ReactDOM.render(dashBoard, document.getElementById("dashboard"));
  });
