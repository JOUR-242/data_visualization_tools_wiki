// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map( 'map', {
    center: [37.0, -93.0],
    minZoom: 2,
    zoom: 5
});

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon1 = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});
var myIcon = L.icon({
    iconUrl: myURL + 'images/pin60.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});
var myIcon1 = L.icon({
    iconUrl: myURL + 'images/pin61.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon1} )
      .bindPopup( '<p>' + markers[i].line1 + '</p>' + markers[i].line2 + '</p>' + markers[i].line3 )
      .addTo( map );
}

for ( var i=0; i < markers1.length; ++i ) 
{
   L.marker( [markers1[i].lat, markers1[i].lng], {icon: myIcon} )
      .bindPopup( '<p>' + markers1[i].line1 + '</p>' + markers1[i].line2 + '</p>' + markers1[i].line3  )
      .addTo( map );
}