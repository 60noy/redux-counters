// import counter from './counter'
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/index'

const counters = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, 0]
    case REMOVE_COUNTER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    case INCREMENT_COUNTER:
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1),
      ]
    case DECREMENT_COUNTER:
      return [
        ...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export default counters
