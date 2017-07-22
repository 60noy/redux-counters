// import counter from './counter'
import { ADD_COUNTER, REMOVE_COUNTER } from '../actions/index'

const allCounters = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state.concat[0]
    case REMOVE_COUNTER:
      return state.filter((item, index) => index !== action.index)
    default:
      return state
  }
}

export default allCounters
