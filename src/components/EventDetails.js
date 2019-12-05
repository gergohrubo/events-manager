import React from 'react'

function EventForm(props) {
  return <div>
    {!props.event && <p>Loading...</p>}
    {props.event && <div><h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>Delete event</button></div>}
  </div>
}

export default EventForm