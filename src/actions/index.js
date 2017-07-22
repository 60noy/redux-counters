// action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'

// add one to the state value
export const addOne = () => ({
  type: INCREMENT,
})
// remove one from the state value
export const substractOne = () => ({
  type: DECREMENT,
})
