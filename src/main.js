var { districts, defaultLatitude, defaultLongitude, defaultZoom } = config;

var counter = new Counter(30);

var map = Map(defaultLatitude, defaultLongitude, defaultZoom);
var markersLayer = new L.FeatureGroup();
var timerElement = document.querySelector("#timer");
var buttonRefresh = document.querySelector("#button-refresh");

function updateMap(stations) {
  markersLayer.clearLayers();
  stations.forEach(station => Marker(station).addTo(markersLayer));
  map.addLayer(markersLayer);
}

var fetch$ = Rx.Observable.ajax(config.apiUrl + "stations").map(
  e => e.response
);

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
    updateMap(stations);
  });
