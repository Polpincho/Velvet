import Rx from "rxjs";

var timerElement = document.querySelector("#timer");
var buttonRefresh = document.querySelector("#button-refresh");

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

var counter = new Counter(60);

function update() {}

var fetch$ = Rx.Observable.ajax("" + "stations").map(e => e.response);

var timer$ = Rx.Observable.timer(0, 1000)
  .do(() => {
    timerElement.innerHTML = counter.getValue();
    counter.tick();
  })
  .filter(() => counter.getValue() + 1 === 30);

var refresh$ = Rx.Observable.fromEvent(buttonRefresh, "click").do(() => {
  counter.reset();
  timerElement.innerHTML = counter.getValue();
  counter.tick();
});

var updater$ = Rx.Observable.merge(timer$, refresh$)
  .switchMap(val => fetch$)
  .subscribe(stations => {
    update(stations);
  });
