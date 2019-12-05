import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
}

export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

export const deleteEvent = id => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/event/${id}`)
    .then(response => {
      console.log('from the action creator', response)
      dispatch(eventDeleted(id))
    })
}

const eventDeleted = id => ({
  type: EVENT_DELETE_SUCCESS,
  id
})

export const EVENT_UPDATED = 'EVENT_UPDATED'

export const updateEvent = (id, data) => (dispatch, getState) => {
  request
    .put(`${baseUrl}/event/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdated(id, data))
    })
}

const eventUpdated = (id, data) => ({
  type: EVENT_UPDATED,
  id,
  data
})