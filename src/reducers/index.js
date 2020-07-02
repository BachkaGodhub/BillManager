import { combineReducers } from 'redux'

import players from './players'
import counter from './counter'

let reduce = combineReducers({
  counter: counter,
  players: players
})

export default reduce
