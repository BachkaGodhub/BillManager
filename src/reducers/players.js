let initialState = [
  { name: 'bachka', buyIn: 30, chips: 3500, guv: 3 },
  { name: 'bachka1', buyIn: 15, chips: 1000, guv: 3 },
  { name: 'bachka2', buyIn: 5, chips: 500, guv: 3 }
]

function players (state = initialState, action) {
  if (action.type === 'ADD_PLAYER') {
    if (!state.find(player => player.name === action.name)) {
      return [].concat(state, [
        {
          name: action.name,
          buyIn: action.buyIn,
          chips: action.chips,
          guv: action.guv
        }
      ])
    } else {
      alert('Player exists allready in the Table')
    }
  }

  if (action.type === 'DELETE_PLAYER') {
    if (state.find(player => player.name === action.name)) {
      return state.filter(player => player.name != action.name)
    }
  }

  return state
}

export default players
