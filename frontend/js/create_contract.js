mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2llejM4OTUiLCJhIjoiY2lsZnppc2R2MjN4NXZubWNta2k4d2d0OSJ9.Rno_SSBkcFDlq4rCoLHnQg';
var map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [118.654001, 26.936789],
    zoom: 1
});

var coordMap = {
  'HKG': [118.654001, 26.936789],
  'NYC': [-91.34033203125,26.01647949196029245],
  'LAX': [-118.34033203125,26.01647949196029245]
}


var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [118.654001, 26.936789],
    zoom: 1
});

$('#origin').on('change', function() {
  map1.flyTo({center: coordMap[this.value]})
  Lockr.set('origin', this.value)
});

$('#destination').on('change', function() {
  map2.flyTo({center: coordMap[this.value]})
  Lockr.set('destination', this.value)
});

Lockr.set('origin', 'HKG')
Lockr.set('destination', 'HKG')
Lockr.set('updated', 'true')