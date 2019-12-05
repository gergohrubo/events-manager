import { EVENT_FETCHED, EVENT_UPDATED } from '../actions/events'

const initialState = null

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event
    case EVENT_UPDATED:
      return action.data
    default:
      return state
  }
}