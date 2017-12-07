import React, { Component } from 'react';
import List from './List';
import Picker from './Picker';
import {Button} from 'react-bootstrap';
import ProximitySearch from './ProximitySearch';

// These three arrays are to define the DropdownMenus used for sorting/filtering.
const sortOptions = [
    {name: "name", value: "Alphabetical", active: true},
    {name: "built", value: "Age"},
    {name: "size", value: "Name Length"}
];

const roomTypeOptions = [
    {name: "all", value: "All", active: true},
    {name: 1, value: "Singles"},
    {name: 2, value: "Doubles"},
    {name: 3, value: "Triples"},
    {name: 4, value: "Quads"},
    {name: 5, value: "Suites"}
];

const accessibilityOptions = [
    {name: "all", value: "All", active: true},
    {name: "Accessible", value: "Accessible"},
    {name: "Non-accessible", value: "Non-accessible"}
];

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            roomType: "all",
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
        return item.name.toLowerCase().search(this.state.search) !== -1 
            && (item.roomType.indexOf(this.state.roomType) != -1  || this.state.roomType === "all")
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
        if(this.state.sorting === "size") {
            return a.name.length - b.name.length;
        }

        // This line returns correct sorting values for an integer or string, depending on which is desired.
        return a[this.state.sorting] > b[this.state.sorting];
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
            roomType: "all",
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
        this.refs.roomTypePicker.changeTitle(null,val);
        this.refs.accessibilityPicker.changeTitle(null,val);
    }   

    render() {
        return (
            <div className="filter-list">
                <div id="header">
                    <div id="title"><img alt="Brown University Seal" src="brown-logo.png" id="logo" /><h1>Sophomore Dorm Guide</h1></div>
                    <Picker ref="sortPicker" pickFunction={this.setSetting} selection="sorting" items={sortOptions} title="Sort by" id="sortPicker" />
                    <Picker ref="roomTypePicker" pickFunction={this.setSetting} selection="roomType" items={roomTypeOptions} title="Room Type"  id="roomTypePicker"/>
                    <Picker ref="accessibilityPicker" pickFunction={this.setSetting} selection="accessible" items={accessibilityOptions} title="Accessibility"  id="accessibilityPicker"/>
                    <Button onClick={this.clearPrefs}>Clear preferences</Button>
                    <ProximitySearch ref="map" items={this.props.items.filter(this.filterItem)} updateFunction={this.updateDistances}/>
                    <input ref="search" type="text" placeholder="Search" onChange={this.onSearch} className="field"/>
                </div>
                <List items={this.props.items.filter(this.filterItem).sort(this.sortItems)}/>
            </div>
        );
    }
}
export default FilteredList;