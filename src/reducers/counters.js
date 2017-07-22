import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/index'

const counters = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, { title: action.title, value: 0 }]
    case REMOVE_COUNTER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    case INCREMENT_COUNTER: {
      const { value, title } = state[action.index]
      return [
        ...state.slice(0, action.index),
        { title, value: value + 1 },
        ...state.slice(action.index + 1),
      ]
    }
    case DECREMENT_COUNTER: {
      const { value, title } = state[action.index]
      return [
        ...state.slice(0, action.index),
        { title, value: value - 1 },
        ...state.slice(action.index + 1),
      ]
    }
    default:
      return state
  }
}

export default counters
