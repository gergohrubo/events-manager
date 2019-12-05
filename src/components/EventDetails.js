import React from 'react'
import EventForm from './EventForm'

function EventDetails(props) {
  return <div>
    {!props.event && <p>Loading...</p>}
    {props.event && props.editMode && <EventForm onChange={props.onChange} onSubmit={props.onSubmit} values={props.formValues} />}
    {props.event && !props.editMode && <div><h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>Delete event</button>
      <button onClick={props.onEdit}>Edit event</button>
    </div>}
  </div>
}

export default EventDetails