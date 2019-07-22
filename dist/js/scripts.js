// (function($) {
$(document).ready(function() {
    var swiper1 = new Swiper('.swiper1', {
        direction: 'vertical',
        speed: 1000,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
            // type: 'bullets',
        },
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        speed: 1000,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hiddenClass: '.swiper-button-hidden',
        },
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('scro');
        } else {
            $('header').removeClass('scro');
        }
        if ($(this).scrollTop() >= 0) {
            $('#link1').addClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link1').removeClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link2').addClass('activ');
        }
        if ($(this).scrollTop() > 700) {
            $('#link2').addClass('activ');
        } else {
            $('#link2').removeClass('activ');
        }
        if ($(this).scrollTop() > 2330) {
            $('#link2').removeClass('activ');
        }
        if ($(this).scrollTop() > 2330) {
            $('#link3').addClass('activ');
        } else {
            $('#link3').removeClass('activ');
        }
        if ($(this).scrollTop() > 3335) {
            $('#link3').removeClass('activ')
        }
        if ($(this).scrollTop() > 4600) {
            $('#link4').addClass('activ')
        } else {
            $('#link4').removeClass('activ');
        }
    });
});

//--------------------- MAP-----------------------//

var map, marker,
    center = {
        lat: 46.9659100,
        lng: 31.9974000
    };

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: center,
        zoom: 7,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    marker = new google.maps.Marker({
        position: {
            lat: 46.9659100,
            lng: 31.9974000
        },
        map: map,
        icon: 'img/marker.png',

    });
}