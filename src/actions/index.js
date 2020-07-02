export function addPlayer (name, buyIn, chips) {
  return { type: 'ADD_PLAYER', name: name, buyIn: buyIn, chips: chips }
}

export function deletePlayer (name) {
  return { type: 'DELETE_PLAYER', name: name }
}
