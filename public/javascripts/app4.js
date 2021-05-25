let map;

options = {
    center: { lat: 6.61468, lng: 3.345702 },
    zoom: 8,
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), options);
}