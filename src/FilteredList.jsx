import React, { Component } from 'react';
import List from './List';
import Picker from './Picker';
import ProximitySearch from './ProximitySearch';

// These three arrays are to define the DropdownMenus used for sorting/filtering.
const sortOptions = [
    {name: "name", value: "Alphabetical", active: true},
    {name: "built", value: "Age"},
    {name: "size", value: "Name Length"}
];

const locationOptions = [
    {name: "all", value: "All", active: true},
    {name: "Main Green", value: "Main Green"},
    {name: "Sciences Park", value: "Sciences Park"},
    {name: "West", value: "West"},
    {name: "Simmons Quadrangle", value: "Simmons Quadrangle"},
    {name: "Pembroke Campus", value: "Pembroke Campus"},
    {name: "Wriston Quadrangle", value: "Wriston Quadrangle"}
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
            location: "all",
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
            && (item.location === this.state.location || this.state.location === "all")
            && (item.accessible === this.state.accessible || this.state.accessible === "all");
    }

    // This method sets the appropriate filter/sort state variable to the new filter/sort criterion.
    setSetting = (eventKey, event) => {
        this.highlightOnlyMenuItem(event.currentTarget.parentElement);
        this.setState({
            [event.currentTarget.getAttribute("selection")]: eventKey
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
        }
        this.setState({
            sorting: "distance",
            distance: this.state.distance + 1
        });
    }

    render() {
        return (
            <div className="filter-list">
                <div id="header">
                    <div id="title"><img alt="Brown University Seal" src="brown-logo.png" id="logo" /><h1>Dorm Directory</h1></div>
                    <Picker pickFunction={this.setSetting} selection="sorting" items={sortOptions} title="Sort by" id="sortPicker" />
                    <Picker pickFunction={this.setSetting} selection="location" items={locationOptions} title="Location"  id="locationPicker"/>
                    <Picker pickFunction={this.setSetting} selection="accessible" items={accessibilityOptions} title="Accessibility"  id="accessibilityPicker"/>
                    <ProximitySearch items={this.props.items.filter(this.filterItem)} updateFunction={this.updateDistances}/>
                    <input type="text" placeholder="Search" onChange={this.onSearch} className="field"/>
                </div>
                <List items={this.props.items.filter(this.filterItem).sort(this.sortItems)}/>
            </div>
        );
    }
}
export default FilteredList;