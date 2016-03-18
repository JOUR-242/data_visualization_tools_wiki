var countriesData = {"type":"FeatureCollection","features":[
{
    "type": "Feature",
    "properties": {
        "name": "Albania",
        "literacy": 99
    },
    "geometry": {"type":"Polygon","coordinates":[[[20.590247,41.855404],[20.463175,41.515089],[20.605182,41.086226],[21.02004,40.842727],[20.99999,40.580004],[20.674997,40.435],[20.615,40.110007],[20.150016,39.624998],[19.98,39.694993],[19.960002,39.915006],[19.406082,40.250773],[19.319059,40.72723],[19.40355,41.409566],[19.540027,41.719986],[19.371769,41.877548],[19.304486,42.195745],[19.738051,42.688247],[19.801613,42.500093],[20.0707,42.58863],[20.283755,42.32026],[20.52295,42.21787],[20.590247,41.855404]]]}},
    {"type":"Feature",
    "properties":{
    "name":"Alabama",
    "density":97},
    "geometry":{"type":"Polygon","coordinates":[[[23.69998,35.705004],[24.246665,35.368022],[25.025015,35.424996],[25.769208,35.354018],[25.745023,35.179998],[26.290003,35.29999],[26.164998,35.004995],[24.724982,34.919988],[24.735007,35.084991],[23.514978,35.279992],[23.69998,35.705004]]],[[[26.604196,41.562115],[26.294602,40.936261],[26.056942,40.824123],[25.447677,40.852545],[24.925848,40.947062],[23.714811,40.687129],[24.407999,40.124993],[23.899968,39.962006],[23.342999,39.960998],[22.813988,40.476005],[22.626299,40.256561],[22.849748,39.659311],[23.350027,39.190011],[22.973099,38.970903],[23.530016,38.510001],[24.025025,38.219993],[24.040011,37.655015],[23.115003,37.920011],[23.409972,37.409991],[22.774972,37.30501],[23.154225,36.422506],[22.490028,36.41],[21.670026,36.844986],[21.295011,37.644989],[21.120034,38.310323],[20.730032,38.769985],[20.217712,39.340235],[20.150016,39.624998],[20.615,40.110007],[20.674997,40.435],[20.99999,40.580004],[21.02004,40.842727],[21.674161,40.931275],[22.055378,41.149866],[22.597308,41.130487],[22.76177,41.3048],[22.952377,41.337994],[23.692074,41.309081],[24.492645,41.583896],[25.197201,41.234486],[26.106138,41.328899],[26.117042,41.826905],[26.604196,41.562115]]]}},
    }
L.geoJson(countriesData).addTo(map);
var mapboxAccessToken = {'pk.eyJ1IjoiYWxraWVzZWwiLCJhIjoiY2lsYjc3M3drMGpnNHR1bHhvNHF6NDZpaSJ9.cGysZzI1AAVzy9t2WZcaiQ';}
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoiYWxraWVzZWwiLCJhIjoiY2lsYjc3M3drMGpnNHR1bHhvNHF6NDZpaSJ9.cGysZzI1AAVzy9t2WZcaiQ', {
    id: 'mapbox.light',
    attribution: 'mapbox',
}).addTo(map);
L.geoJson(countriesData).addTo(map);
var geojsonURL = 'http://polymaps.appspot.com/county/{z}/{x}/{y}.json';
    var geojsonLayer = new L.TileLayer.GeoJSON(geojsonURL);
    geojsonLayer.setGeoJSONOptions({
        /* style of GeoJSON feature */
        style: {
            "color": "#1B1",
            "fillColor": "#1B1",
            "weight": 0.7,
            "opacity": 0.3,
            "fillOpacity": 0.1
function getColor(l) {
    return l > 100 ? '#800026' :
           l > 95  ? '#BD0026' :
           l > 90  ? '#E31A1C' :
           l > 85  ? '#FC4E2A' :
           l > 80   ? '#FD8D3C' :
           l > 75   ? '#FEB24C' :
           l > 70   ? '#FED976' :
                      '#FFEDA0';
function style(feature) {
    return {
        fillColor: getColor(feature.properties.literacy),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
L.geoJson(countriesData, {style: style}).addTo(map);
}

    