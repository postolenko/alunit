if( document.getElementsByClassName("map-box")[0] ) {

	var map;
	var marker;
	// var image = "img/map.png";
	var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.589519, lng: 38.5052611},
			scrollwheel: false,
			scaleControl: false,
			zoom: 17
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.589519, lng: 38.5052611},
			map: map,
			// icon: image,
			title: 'Alunit'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}



