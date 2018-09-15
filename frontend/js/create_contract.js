mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2llejM4OTUiLCJhIjoiY2lsZnppc2R2MjN4NXZubWNta2k4d2d0OSJ9.Rno_SSBkcFDlq4rCoLHnQg';
var map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-100.34033203125,32.01647949196029245],
    zoom: 1
});

var coordMap = {
  "Austin, USA": [-100.34033203125,32.01647949196029245],
  "Beijing, China": [118.654001, 26.936789],
  "Hong Kong, Hong Kong": [118.654001, 0.936789],
  "London, UK": [-10.32, 60],
  "Los Angeles, USA": [-118.34033203125,26.01647949196029245],
  "New York City, USA": [-91.34033203125,26.01647949196029245],
  "San Francisco, USA": [-118.34033203125,32.01647949196029245],
  "Shanghai, China": [100.654001, 26.936789],
  "Taipei, Taiwan": [100.654001, -10.936789]
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

Lockr.set('origin', 'Austin, USA')
Lockr.set('destination', 'Beijing, China')
Lockr.set('updated', 'true')