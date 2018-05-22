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
          status: "0",
          init: 1,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of30",
          codef: "0030",
          status: "0",
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
          status: "0",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of3",
          codef: "0003",
          status: "0",
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
          status: "0",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of5",
          codef: "0005",
          status: "0",
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
          status: "0",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of7",
          codef: "0007",
          status: "0",
          init: 2,
          final: 5,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of8",
          codef: "0008",
          status: "0",
          init: 5,
          final: 6,
          uniactual: 100,
          uniFinal: 100
        },
        {
          name: "Of9",
          codef: "0009",
          status: "0",
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
          status: "0",
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
          status: "0",
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
          status: "0",
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
      statuus: props.status,
      actunit: props.actU,
      totunit: props.endU,
      strtime: props.initT,
      endtime: props.endT
    };

    this.key = props.id2;
    this.state.statusstr = "error";
    if (this.state.statuus === "0") {
      this.state.statusstr = "activa";
    }
    if (this.state.statuus === "1") {
      this.state.statusstr = "warning";
    }
    if (this.state.statuus === "2") {
      this.state.statusstr = "error";
    }
    var data = new Date();
    if (
      this.state.strtime > data.getHours() ||
      this.state.endtime < data.getHours()
    ) {
      this.state.statusstr = this.state.statusstr + "next";
    }
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
    var state2 = "of " + this.state.statusstr;
    return (
      <button class={state2} style={styles}>
        {this.state.nameOf}
      </button>
    );
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
      var stateof = of1.status;
      var initof = of1.init;
      var endof = of1.final;
      var actuni = of1.uniactual;
      var enduni = of1.uniFinal;

      row.push(
        <Of
          id2={"Of" + codeof}
          name={nameof}
          code={codeof}
          status={stateof}
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
      borderCollapse: "collapse",
      border: "1px solid #e0e0e0",
      width: "100%"
    };
    const stylesce = {
      position: "relative",
      border: "1px solid #e0e0e0",
      width: "100%"
    };
    const stylesgray = {
      position: "relative",
      width: (100 / 24).toString() + "%",
      background: "#f3f2f9"
    };
    const styleswhite = {
      position: "relative",
      width: (100 / 24).toString() + "%",
      background: "#FFFFFF"
    };
    var row = [];
    for (var i = 0; i < 24; ++i) {
      if (i % 2 == 0) {
        row.push(<th style={stylesgray}>{i + ":00"}</th>);
      } else {
        row.push(<th style={styleswhite}>{i + ":00"}</th>);
      }
    }
    return (
      <table style={stylesglobal}>
        <tr style={stylesce}>{row}</tr>
      </table>
    );
  }
}

//-------------------------------------------------------------------LineLegend----------------------------------------------------------------------

class LineLegend extends React.Component {
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
      margin: "30px",
      width: "1920px",
      height: "100%"
    };
    const stylerow = {
      position: "relative",
      height: (90 / 10).toString() + "%"
    };

    var row = [];
    for (var i = 0; i < this.state.numlines; ++i) {
      var line = this.state.lines[i];
      var linename = line.name;
      var linecode = line.code;
      row.push(
        <div class="legend-row" style={stylerow}>
          {linename}
        </div>
      );
    }
    return <div class="legend-container">{row}</div>;
  }
}

//-------------------------------------------------------------------DASHBOARD----------------------------------------------------------------------

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numlines: props.numLines,
      lines: [],
      order: props.where
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
      display: "inline-block",
      width: "1920px",
      left:
        (
          (this.state.order * 100 -
            100 +
            30 -
            100 * (date.getHours() * 60 + date.getMinutes()) / 1440) /
          3
        ).toString() + "%",
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
    const stylesglobal = {
      padding: "0px 0px 16px 16px",
      top: "16px",
      left: "16px",
      position: "relative",
      borderCollapse: "collapse",
      border: "1px solid #e0e0e0",
      width: "264px",
      height: "68px"
    };

    const styles = {
      position: "absolute",
      borderCollapse: "collapse",
      border: "1px solid #e0e0e0",
      width: "288px",
      height: "84px"
    };
    return (
      <div class="currentdate_container">
        <div class="currentdate_day">{this.state.time.getDate()}</div>
        <div class="currentdate_text">
          <div class="currentdate_monthyear">{getMonthName()}</div>
          <div class="currentdate_textday">{getDayWeek()}</div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------

var numlines = test1.numLines;
var lines = test1.lines;

const greenstyle = {
  position: "absolute",
  left: "10%",
  height: "100%",
  width: "2px",
  zIndex: "9999",
  background: "#2dbd53"
};

const linestyle = {
  position: "absolute",
  left: "10%",
  height: "100%",
  width: "2px",
  zIndex: "9994",
  background: "#2dbd53"
};

const stylescont = {
  position: "absolute",
  height: "100%",
  width: "5760px"
};

var contDashs = (
  <div style={stylescont}>
    <div class="vertical_line" style={greenstyle} />
    <LineLegend key="lineslegend" numLines={numlines} lines={lines} />
    <Dashboard key="dash-1" numLines={numlines} lines={lines} where="0" />
    <Dashboard key="dash0" numLines={numlines} lines={lines} where="1" />
    <Dashboard key="dash1" numLines={numlines} lines={lines} where="2" />
  </div>
);

var clock = <Clock />;
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
  ReactDOM.render(contDashs, document.getElementById("contenedordash"));
});
