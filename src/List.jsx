import React, { Component } from 'react';

class List extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            return <li key={item.name}><a href={item.navLink} target="_blank"><img alt={"photo of " + item.name} src={item.img}/></a><h3>{item.name}</h3><h4>Built: {item.built}</h4><p>{item.description}</p></li>
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