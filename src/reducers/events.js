import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCESS } from '../actions/events'

const initialState = null

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events
    case EVENT_CREATE_SUCCESS:
      if (state) {
        return state.concat(action.event)
      }
      return state
    case EVENT_DELETE_SUCCESS:
      const newState = [...state]
      return newState.filter(event => event.id !== action.event)
    default:
      return state
  }
}