import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'

class ProximitySearch extends Component {
	constructor() {
		super();
		//var autocomplete = new window.google.maps.places.Autocomplete(this.refs.mapSearch);
	}

	autofill = (event) => {
		
	}

    render() {
        return (
            <input ref="mapSearch" type="text" placeholder="map" onChange={this.autofill} className="field"/>
        );
    }
}
export default ProximitySearch;