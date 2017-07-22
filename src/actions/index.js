// action types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'

// add one to the state value
export const incrementCounter = index => ({
  type: INCREMENT_COUNTER,
  index,
})
// remove one from the state value
export const decrementCounter = index => ({
  type: DECREMENT_COUNTER,
  index,
})

export const addCounter = () => ({
  type: ADD_COUNTER,
})

export const removeCounter = index => ({
  type: REMOVE_COUNTER,
  index,
})
