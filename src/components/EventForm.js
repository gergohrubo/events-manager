import React from 'react'

function EventForm(props) {
  return <div>
    <form onSubmit={props.onSubmit}>
      <p>Name:</p>
      <input onChange={props.onChange} value={props.values.name} name="name" />
      <p>Date:</p>
      <input onChange={props.onChange} value={props.values.date} name="date" />
      <p>Description:</p>
      <input onChange={props.onChange} value={props.values.description} name="description" />
      <p>
        <button type="submit">Create new event</button>
      </p>
    </form>
  </div>
}

export default EventForm