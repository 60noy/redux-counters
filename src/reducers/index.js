import { combineReducers } from 'redux'
import allCountersReducers from './allCounters'

const reducers = combineReducers({
  counters: allCountersReducers,
})

export default reducers
