import React, { Component } from 'react';

var autocomplete;
var google = window.google;
var names = [];

class ProximitySearch extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		autocomplete = new google.maps.places.Autocomplete(this.refs.mapSearch);
		autocomplete.addListener('place_changed', this.autofill);
	}

	autofill = (event) => {
		var dest = autocomplete.getPlace().geometry.location;
		var service = new google.maps.DistanceMatrixService();
		var origins = [];
		this.props.items.forEach(function(element, i) {
			origins[i] = element.latLong;
			names[i] = element.name;
		});
		service.getDistanceMatrix({
			origins: origins,
			destinations: [dest],
			travelMode: 'WALKING'}, this.callback);
		}

	callback = (response, status) => {
		console.log(response);
		this.props.updateFunction(response.rows, names);
		names = [];
	}

    render() {
        return (
            <input ref="mapSearch" type="text" placeholder="map" className="field"/>
        );
    }
}
export default ProximitySearch;