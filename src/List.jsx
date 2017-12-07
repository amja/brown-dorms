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
                    <p>{item.description} (map: <a href={item.googleMap} target="_blank">Google</a> / <a href={item.brownMap} target="_blank">Brown</a>)</p>
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