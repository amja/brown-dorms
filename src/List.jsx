import React, { Component } from 'react';

class List extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            if(item.time_text != null) {
                var distance = <h4>Walking time to location: {item.time_text}</h4>
            }
            return (
                <li key={item.name}>
                    <img alt={"photo of " + item.name} src={item.img}/>
                    <h3>{item.name}</h3>
                    <h4>Built: {item.built}</h4>{distance}
                    <p>{item.description} (map: <a href={item.brownMap} target="_blank">Brown</a>)</p>
                    <p>Number of Rooms: {item.numRooms}</p>
                    <p>Accessibility: {item.accessible ? "Accessible" : "Non-Accessible"}</p>
                    <p>Kitchens: {item.kitchens}</p>
                    <p>Bathroom Type: {item.bathrooms}</p>
                    <p>Program Housing?: {item.program}</p>
                </li>)
        });

        return items;
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;