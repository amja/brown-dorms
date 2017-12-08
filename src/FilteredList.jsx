import React, { Component } from 'react';
import List from './List';
import Picker from './Picker';
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import ProximitySearch from './ProximitySearch';

// These three arrays are to define the DropdownMenus used for sorting/filtering.
const sortOptions = [
    {name: "name", value: "Alphabetical", active: true},
    {name: "numRooms", value: "Number of Rooms"},
    {name: "built", value: "Age"},
];

const accessibilityOptions = [
    {name: "all", value: "All", active: true},
    {name: true, value: "Accessible"},
    {name: false, value: "Non-accessible"}
];

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            roomType: [],
            sorting: "name",
            accessible: "all",
            distance: 0
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    // Returns the item if it is included in the selected filters.
    filterItem = (item) => {
        var roomAppropriate = true;
        this.state.roomType.forEach(function(val) {
            if(item.roomType.indexOf(val) === -1) {
                roomAppropriate = false;
            }
        });
        return item.name.toLowerCase().search(this.state.search) !== -1 
            && (roomAppropriate)
            && (item.accessible === this.state.accessible || this.state.accessible === "all");
    }

    // This method sets the appropriate filter/sort state variable to the new filter/sort criterion.
    setSetting = (eventKey, event) => {
        this.highlightOnlyMenuItem(event.currentTarget.parentElement);
        this.setState({
            [event.currentTarget.getAttribute("selection")]: eventKey
        });
        this.refs.map.refs.mapSearch.value = "";
        this.props.items.forEach(function(element) {
            element.distance = null;
            element.time_text = null;
        });
    }

    // One method for sorting name length, date built or alphabetical.
    sortItems = (a,b) => {
        // This line returns correct sorting values for an integer or string, depending on which is desired.
        if(a[this.state.sorting] > b[this.state.sorting]) {
            return 1;
        }
        if(a[this.state.sorting] < b[this.state.sorting]) {
            return -1;
        }
        return 0;
    }

    // Highlights the selected item in the DropdownMenu.
    highlightOnlyMenuItem = (item) => {
        item.parentElement.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove("active");
        });
        item.classList.add("active");
    }

    // This method populates the distance field of the locations and then sorts them by that.
    updateDistances = (elements, names) =>{
        this.setState({sorting: "name"});
        var val = {currentTarget: {textContent: "All"}};
        this.refs.sortPicker.changeTitle(null,val);
        for(var i = 0; i < elements.length; i++) {
            this.props.items[i].distance = elements[i].elements[0].duration.value;
            this.props.items[i].time_text = elements[i].elements[0].duration.text;
        }
        this.setState({
            sorting: "distance",
            distance: this.state.distance + 1
        });
    }

    clearPrefs = () => {
        this.setState({
            search: "",
            roomType: [],
            sorting: "name",
            accessible: "all",
            distance: 0
        });
        this.refs.search.value = "";
        this.refs.map.refs.mapSearch.value = "";
        this.props.items.forEach(function(element) {
            element.distance = null;
            element.time_text = null;
        });

        // I hate this
        var val = {currentTarget: {textContent: "All"}};
        this.refs.sortPicker.changeTitle(null,val);
        this.setState({
            roomType: []
        });
        this.refs.accessibilityPicker.changeTitle(null,val);
    }   

    addRoomSize = (eventKey) => {
        this.setState({
            roomType: eventKey
        });
    }

    render() {
        return (
            <div className="filter-list">
                <div id="header">
                    <div id="logo"><img alt="Brown University Seal" src="brown-logo.png" id="logo"/></div>
                    <h1>Sophomore Dorm Guide</h1>
                    <div id="navbar">
                        <Picker ref="sortPicker" pickFunction={this.setSetting} selection="sorting" items={sortOptions} title="Sort by" id="sortPicker" />
                        <ToggleButtonGroup type="checkbox" onChange={this.addRoomSize} value={this.state.roomType}>
                            <ToggleButton value={1} className="edge" checked={true}>Single</ToggleButton>
                            <ToggleButton value={2}>Double</ToggleButton>
                            <ToggleButton value={3}>Triple</ToggleButton>
                            <ToggleButton value={4}>Quad</ToggleButton>
                            <ToggleButton value={5} className="edge">Suite</ToggleButton>
                        </ToggleButtonGroup>
                        <Picker ref="accessibilityPicker" pickFunction={this.setSetting} selection="accessible" items={accessibilityOptions} title="Accessibility"  id="accessibilityPicker"/>
                        <Button onClick={this.clearPrefs} className="field">Clear preferences</Button>
                        <ProximitySearch ref="map" items={this.props.items.filter(this.filterItem)} updateFunction={this.updateDistances}/>
                        <input ref="search" type="text" placeholder="Search by name" onChange={this.onSearch} className="field"/>
                    </div>
                </div>
                <List items={this.props.items.filter(this.filterItem).sort(this.sortItems)}/>
            </div>
        );
    }
}
export default FilteredList;