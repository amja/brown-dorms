import React, { Component } from 'react';
import './App.css';
import {buildings} from './data.js';
import FilteredList from './FilteredList';

/**
 * This React app serves information about 13 Brown buildings, allowing you to sort and filter them!
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <FilteredList items={buildings} />
            </div>
        );
    }
}

export default App;