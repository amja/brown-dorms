import React, { Component } from 'react';

class List extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            if(item.time_text != null) {
                var distance = <h4>Walking time to location: {item.time_text}</h4>
            }
            return (
                <li key={item.name}>
                    <a href={item.navLink} target="_blank">
                        <img alt={"photo of " + item.name} src={item.img}/>
                    </a>
                    <h3>{item.name}</h3>
                    <h4>Built: {item.built}</h4>{distance}
                    <p>{item.description}</p>
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