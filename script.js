function initMap() {
    // The location of Uluru
    var portal = {lat: 33.651, lng: -117.838};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: portal});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: portal, map: map});
  }