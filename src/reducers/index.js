import { combineReducers } from 'redux'
// import counterReducer from './counter'
import allCountersReducers from './allCounters'

const reducers = combineReducers({
  counters: allCountersReducers,
  // counterReducer,
})

export default reducers
