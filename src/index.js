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
      numofs: 2,
      of: [
        {
          name: "Of1",
          codef: "0001",
          init: 1,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of30",
          codef: "0030",
          init: 2,
          final: 24,
          uniactual: 100,
          uniFinal: 100
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

var timerElement = document.querySelector("#timer");
var buttonRefresh = document.querySelector("#button-refresh");
//-----------------------------------------------------FUNCTIONS---------------------------------------------------

function getDayWeek() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miercoles";
  weekday[4] = "Jueves";
  weekday[5] = "Viernes";
  weekday[6] = "Sabado";

  var n = weekday[d.getDay()];
  return n;
}

function getMonthName() {
  var d = new Date();
  var months = new Array(12);
  months[0] = "Ene";
  months[1] = "Febr";
  months[2] = "Mar";
  months[3] = "Abr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Ago";
  months[8] = "Sept";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dic";

  var n = months[d.getMonth()];
  return n;
}

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
    var percmov = this.state.strtime / 24 * 100;
    var perc = (this.state.endtime - this.state.strtime) / 24 * 100;
    const styles = {
      position: "absolute",
      left: percmov.toString() + "%",
      width: perc.toString() + "%",
      height: "100%",
      zindex: "2"
    };
    return <button style={styles}>{this.state.nameOf}</button>;
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
    const styles = {
      position: "relative",
      width: "100%",
      height: (90 / 10).toString() + "%"
    };
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
    return (
      <div key={this.state.key2} style={styles}>
        {row}
      </div>
    );
  }
}

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stylesglobal = {
      position: "relative",
      border: "1px solid gray",
      width: "100%"
    };
    const styles = {
      position: "relative",
      border: "1px solid gray",
      width: (100 / 24).toString() + "%"
    };
    var row = [];
    for (var i = 0; i < 24; ++i) {
      row.push(<th style={styles}>{i + ":00"}</th>);
    }
    return (
      <table style={stylesglobal}>
        <tr style={stylesglobal}>{row}</tr>
      </table>
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

    for (var i = 0; i < parseInt(this.state.numlines); ++i) {
      var line = props.lines[i];
      this.state.lines.push(line);
    }
  }

  render() {
    var date = new Date();
    const styles = {
      position: "absolute",
      left:
        (
          30 -
          100 * (date.getHours() * 60 + date.getMinutes()) / 1440
        ).toString() + "%",
      width: "100%",
      height: "100%"
    };
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
    return (
      <div style={styles}>
        <Timeline />
        {row}
      </div>
    );
  }
}

//-------------------------------------------------------------------CLOCK----------------------------------------------------------------------

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    return (
      <p className="App-clock">
        {this.state.time.getDate()}
        {getDayWeek()}
        {getMonthName()}
      </p>
    );
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------

var numlines = test1.numLines;
var lines = test1.lines;
const stylesBig = {
  position: "relative",
  width: "100%",
  height: "100%"
};

const greenstyle = {
  position: "absolute",
  left: "30%",
  height: "100%",
  width: "2px",
  background: "greenyellow"
};

var dashBoard = (
  <div style={stylesBig}>
    <div class="vertical_line" style={greenstyle} />
    <Dashboard key="dash1" numLines={numlines} lines={lines} />
  </div>
);

var clock = (
  <div>
    <Clock />
  </div>
);
var counter = new Counter(59);

function updateLine(lines) {}

var timer$ = Rx.Observable.timer(0, 1000)
  .do(() => {
    //timerElement.innerHTML = counter.getValue();
    counter.tick();
  })
  .filter(() => counter.getValue() + 1 === 59);
/*
var refresh$ = Rx.Observable.fromEvent(buttonRefresh, "click").do(() => {
  counter.reset();
  //timerElement.innerHTML = counter.getValue();
  counter.tick();
});
*/
var updater$ = Rx.Observable.merge(timer$).subscribe(lines => {
  updateLine(lines);
  ReactDOM.render(clock, document.getElementById("timerbar"));
  ReactDOM.render(dashBoard, document.getElementById("dashboard"));
});
