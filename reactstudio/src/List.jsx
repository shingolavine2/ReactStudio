import React from 'react';
import ListItem from './ListItem.jsx';

export default class List extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        test: "test"
      };
  }
  render() {
     const plants = ["Cactus", "Tree", "Flower", "Blueberry", "Venus Fly Trap"];
     const listItems = plants.map((plant) =>
      <ListItem plant={plant} />
      );
    return (
      <div>
        {listItems}
      </div>
    );
  }
}