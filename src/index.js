import ReactDOM from "react-dom";
import React from "react";
import Rx from "rxjs";

//var dashboard = Dashboard(defaultLatitude, defaultLongitude);
var test1 = {
  numLines: 9,
  lines: [
    {
      name: "Linia1",
      code: 0,
      numofs: 5,
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
          name: "Of2",
          codef: "002",
          status: "1",
          init: 2,
          final: 5,
          uniactual: 100,
          uniFinal: 150
        },
        {
          name: "Of3",
          codef: "003",
          status: "0",
          init: 6,
          final: 11,
          uniactual: 50,
          uniFinal: 200
        },
        {
          name: "Of4",
          codef: "004",
          status: "2",
          init: 11,
          final: 17,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of5",
          codef: "005",
          status: "2",
          init: 17,
          final: 24,
          uniactual: 20,
          uniFinal: 200
        }
      ]
    },
    {
      name: "Linia2",
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
          uniFinal: 200
        },
        {
          name: "Of7",
          codef: "0007",
          status: "0",
          init: 2,
          final: 8,
          uniactual: 30,
          uniFinal: 100
        },
        {
          name: "Of8",
          codef: "0008",
          status: "1",
          init: 8,
          final: 12,
          uniactual: 30,
          uniFinal: 100
        },
        {
          name: "Of9",
          codef: "0009",
          status: "0",
          init: 12,
          final: 22,
          uniactual: 30,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia3",
      code: 0,
      numofs: 5,
      of: [
        {
          name: "Of10",
          codef: "0010",
          status: "0",
          init: 0,
          final: 6,
          uniactual: 100,
          uniFinal: 500
        },
        {
          name: "Of11",
          codef: "0011",
          status: "0",
          init: 6,
          final: 8,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of12",
          codef: "0012",
          status: "2",
          init: 8,
          final: 9,
          uniactual: 50,
          uniFinal: 50
        },
        {
          name: "Of13",
          codef: "0013",
          status: "0",
          init: 10,
          final: 19,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of14",
          codef: "0014",
          status: "1",
          init: 20,
          final: 24,
          uniactual: 200,
          uniFinal: 500
        }
      ]
    },
    {
      name: "Linia4",
      code: 0,
      numofs: 5,
      of: [
        {
          name: "Of15",
          codef: "0015",
          status: "0",
          init: 0,
          final: 5,
          uniactual: 100,
          uniFinal: 500
        },
        {
          name: "Of16",
          codef: "0016",
          status: "0",
          init: 5,
          final: 13,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of17",
          codef: "0017",
          status: "2",
          init: 13,
          final: 18,
          uniactual: 50,
          uniFinal: 50
        },
        {
          name: "Of18",
          codef: "0018",
          status: "2",
          init: 18,
          final: 19,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of19",
          codef: "0019",
          status: "1",
          init: 20,
          final: 24,
          uniactual: 200,
          uniFinal: 500
        }
      ]
    },
    {
      name: "Linia5",
      code: 0,
      numofs: 4,
      of: [
        {
          name: "Of20",
          codef: "00020",
          status: "0",
          init: 0,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of21",
          codef: "0021",
          status: "0",
          init: 2,
          final: 8,
          uniactual: 30,
          uniFinal: 100
        },
        {
          name: "Of22",
          codef: "0022",
          status: "1",
          init: 8,
          final: 12,
          uniactual: 30,
          uniFinal: 100
        },
        {
          name: "Of23",
          codef: "0023",
          status: "0",
          init: 12,
          final: 24,
          uniactual: 30,
          uniFinal: 100
        }
      ]
    },
    {
      name: "Linia6",
      code: 0,
      numofs: 0,
      of: []
    },
    {
      name: "Linia7",
      code: 0,
      numofs: 5,
      of: [
        {
          name: "Of24",
          codef: "0024",
          status: "0",
          init: 1,
          final: 2,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of25",
          codef: "0025",
          status: "1",
          init: 2,
          final: 5,
          uniactual: 100,
          uniFinal: 150
        },
        {
          name: "Of26",
          codef: "0026",
          status: "0",
          init: 6,
          final: 12,
          uniactual: 50,
          uniFinal: 200
        },
        {
          name: "Of27",
          codef: "0027",
          status: "2",
          init: 13,
          final: 17,
          uniactual: 100,
          uniFinal: 200
        },
        {
          name: "Of28",
          codef: "0028",
          status: "1",
          init: 17,
          final: 24,
          uniactual: 20,
          uniFinal: 200
        }
      ]
    },
    {
      name: "Linia8",
      code: 0,
      numofs: 5,
      of: [
        {
          name: "Of29",
          codef: "0029",
          status: "0",
          init: 0,
          final: 4,
          uniactual: 100,
          uniFinal: 500
        },
        {
          name: "Of30",
          codef: "0030",
          status: "0",
          init: 5,
          final: 6,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of31",
          codef: "0031",
          status: "2",
          init: 6,
          final: 9,
          uniactual: 50,
          uniFinal: 50
        },
        {
          name: "Of32",
          codef: "0032",
          status: "0",
          init: 10,
          final: 20,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of33",
          codef: "0033",
          status: "0",
          init: 20,
          final: 24,
          uniactual: 200,
          uniFinal: 500
        }
      ]
    },
    {
      name: "Linia9",
      code: 0,
      numofs: 5,
      of: [
        {
          name: "Of34",
          codef: "0034",
          status: "0",
          init: 0,
          final: 3,
          uniactual: 100,
          uniFinal: 500
        },
        {
          name: "Of35",
          codef: "0035",
          status: "1",
          init: 4,
          final: 8,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of36",
          codef: "0036",
          status: "2",
          init: 8,
          final: 10,
          uniactual: 50,
          uniFinal: 50
        },
        {
          name: "Of37",
          codef: "0037",
          status: "0",
          init: 10,
          final: 19,
          uniactual: 50,
          uniFinal: 500
        },
        {
          name: "Of38",
          codef: "0038",
          status: "1",
          init: 19,
          final: 24,
          uniactual: 200,
          uniFinal: 500
        }
      ]
    }
  ]
};

var timerElement = document.querySelector("#timer");
var buttonRefresh = document.querySelector("#button-refresh");

var button = true;
var line = 2;

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
      endtime: props.endT,
      time: new Date()
    };

    this.key = props.id2;
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
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
    var data = this.state.time;
    if (
      this.state.strtime > data.getHours() ||
      this.state.endtime <= data.getHours()
    ) {
      this.state.statusstr = this.state.statusstr + "next";
    }
    var percmov = this.state.strtime / 24 * 100;
    var perc = (this.state.endtime - this.state.strtime) / 24 * 100;
    const styles = {
      position: "absolute",
      left: percmov.toString() + "%",
      width: perc.toString() + "%",
      height: "100%",
      top: "0%",
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

//----------------------------------------------------------------------DetailZone--------------------------------------------------------------------------

class DetailZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOf: props.name,
      OfAc: props.OfAct,
      Ofs: props.Ofs,
      time: new Date()
    };

    this.key = props.id2;
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
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
    const style2 = {
      position: "absolute",
      display: "flex",
      width: (screen.width - 70).toString() + "px",
      height: "300px",
      top: (3 + line * 11).toString() + "%"
    };
    var date = this.state.time;
    return (
      <div class="detailContainer" style={style2}>
        <div class="ofcontainer ">
          <div> Activia FRESA 0% </div>
        </div>
        <div class="ofcontainer" />
        <div class="ofcontainer">
          <div />
        </div>
      </div>
    );
  }
}

//----------------------------------------------------------------------DetailContent--------------------------------------------------------------------------

class DetailContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOf: props.name,
      OfAc: props.OfAct,
      Ofs: props.Ofs,
      time: new Date()
    };

    this.key = props.id2;
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
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
    var date = this.state.time;
    return <div class="detailContainer" />;
  }
}

//---------------------------------------------------------------------LINE-------------------------------------------------------------------------

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.key2;
    this.state = {
      name: props.linename,
      numofs: props.numofs,
      heigth: props.numLine,
      key2: props.key2,
      ofs: [],
      active: props.where,
      time: new Date()
    };

    for (var i = 0; i < parseInt(this.state.numofs); ++i) {
      var of1 = props.ofs[i];
      this.state.ofs.push(of1);
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
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
    var date = this.state.time;
    var styles;
    if (button == true && line == this.state.heigth + 1) {
      styles = {
        position: "relative",
        width: "100%",
        height: (90 / 10).toString() + "%",
        marginBottom: "400px"
      };
    } else
      var styles = {
        position: "relative",
        width: "100%",
        height: (90 / 10).toString() + "%"
      };

    const stylerow = {
      position: "sticky",
      zIndex: "99",
      width: "369px",
      height: "100%",
      left: "84px"
    };

    const styletext = {
      verticalalign: "middle"
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
    if (this.state.active == 1) {
      return (
        <div key={this.state.key2} style={styles}>
          <div class="legend-row" style={stylerow}>
            <span class="numberCircle" style={styletext}>
              {this.state.heigth + 1}
            </span>
            <span class="linename" style={styletext}>
              ACTIVIA LIMA LIMON 0% X4
            </span>
          </div>
          {row}
        </div>
      );
    } else {
      return (
        <div key={this.state.key2} style={styles}>
          {row}
        </div>
      );
    }
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

//-------------------------------------------------------------------DASHBOARD----------------------------------------------------------------------

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numlines: props.numLines,
      lines: [],
      order: props.where,
      time: new Date()
    };

    for (var i = 0; i < parseInt(this.state.numlines); ++i) {
      var line = props.lines[i];
      this.state.lines.push(line);
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
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
    var date = this.state.time;
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
          linename={linename}
          ofs={ofs}
          where={this.state.order}
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
    this.intervalID = setInterval(() => this.tick(), 1000);
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
          <div class="currentdate_textday">
            {getDayWeek()}
            {this.state.time.getSeconds()}
          </div>
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
    <Dashboard key="dash-1" numLines={numlines} lines={lines} where="0" />
    <Dashboard key="dash0" numLines={numlines} lines={lines} where="1" />
    <Dashboard key="dash1" numLines={numlines} lines={lines} where="2" />
    <DetailZone />
  </div>
);

var clock = <Clock />;
var counter = new Counter(59);

function updateLine(linesv) {
  contDashs = (
    <div style={stylescont}>
      <div class="vertical_line" style={greenstyle} />
      <Dashboard key="dash-1" numLines={numlines} lines={lines} where="0" />
      <Dashboard key="dash0" numLines={numlines} lines={lines} where="1" />
      <Dashboard key="dash1" numLines={numlines} lines={lines} where="2" />
      <DetailZone />
    </div>
  );
}

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
