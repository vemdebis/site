/*=========== Google Map  ============*/
var map;
map = new GMaps({
    el: '#map',
    center: new google.maps.LatLng(40.728157, -74.077644),
    zoom: 12,
    // Google map background color style arrow on the below,
    // if you want to change the google map background style
    // then replace below arrow style with your own google map style
    styles: [
        {
            "featureType" : "road",
            "stylers" : [
                {"color" : "#ffffff"}
            ]
        }, {
            "featureType" : "water",
            "stylers" : [
                {"color" : "#e9e9e9"}
            ]
        }, {
            "featureType" : "landscape",
            "stylers" : [
                {"color" : "#f5f5f5"}
            ]
        }, {
            "elementType" : "labels.text.fill",
            "stylers" : [
                {"color" : "transparent"}
            ]
        }, {
            "featureType" : "poi",
            "stylers" : [
                {"color" : "#fefefe"}
            ]
        }, {
            "elementType" : "labels.text",
            "stylers" : [
                {"saturation" : 1},
                {"weight" : 0.1},
                {"color" : "#737980"}
            ]
        }
    ]
});
map.addMarker({
    lat: 40.7173503,
    lng: -74.0557994,
    icon: "images/map-marker.png",
    animation: google.maps.Animation.BOUNCE
});