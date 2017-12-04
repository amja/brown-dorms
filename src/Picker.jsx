import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';

/**
 * This class generates a DropdownButton to use for sorting/filtering. Each item has a selection field to factor out
 * code in the FilteredList class.
 */
class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            style: "default"
        };
    }
    renderMenuItems() {
    	return this.props.items.map(item => {
    		return <MenuItem key={item.name} eventKey={item.name} onSelect={this.props.pickFunction} selection={this.props.selection} active={item.active}>{item.value}</MenuItem>
    	});
    }  

    // Changes the title of the DropdownButton based on the option clicked.
    changeTitle = (eventKey, event) => {
        // Returns DropdownButton to default title if default value is selected.
        var val = event.currentTarget.textContent;
        var style = "danger";
        if(val === "All" || val === "Alphabetical") {
            val = this.props.title;
            style = "default";
        }

        this.setState({
            title: val,
            style: style
        });
    }

    render() {
        return (
            <DropdownButton bsStyle={this.state.style} id={this.props.id} title={this.state.title} onSelect={this.changeTitle} className="field">
              {this.renderMenuItems()}
            </DropdownButton>
        );
    }
}

export default Picker;