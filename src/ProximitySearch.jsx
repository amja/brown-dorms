import React, { Component } from 'react';

var autocomplete;
var google = window.google;
class ProximitySearch extends Component {
	componentDidMount() {
		autocomplete = new google.maps.places.Autocomplete(this.refs.mapSearch);
		autocomplete.addListener('place_changed', this.autofill);
	}

	autofill = (event) => {
		var place = autocomplete.getPlace().geometry.location;
		var service = new google.maps.DistanceMatrixService();
		var dests = [];
		this.props.items.forEach(function(element) {
			dests.append(element.latLong);
		});
		service.getDistanceMatrix({
			origins: [place],
			destinations: dests,
			travelMode: 'WALKING'}, this.callback);
	}
	callback = (response, status) => {
		console.log(response.rows[0].elements[0].duration.value);
		console.log(response.rows[0].elements[1].duration.value);
	}

    render() {
        return (
            <input ref="mapSearch" type="text" placeholder="map" className="field"/>
        );
    }
}
export default ProximitySearch;