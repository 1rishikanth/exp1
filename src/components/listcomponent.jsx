import React from 'react';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'RAM' },
        { id: 2, name: 'Sham' },
        { id: 3, name: 'kaam' }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Ticket booking system</h2>
        <ul>
          {this.state.items.map(item => (
            <ul key={item.id}>{item.name} </ul>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
