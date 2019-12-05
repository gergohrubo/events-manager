import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EventsList extends Component {
  render() {
    return (
      <div>
        {!this.props.events && <p>Loading...</p>}
        {this.props.events && <ul>
          {this.props.events.map(event => <Link to={`/event/${event.id}`}><li key={event.name}>{event.name}</li></Link>)}
        </ul>}
      </div>
    );
  }
}

export default EventsList;