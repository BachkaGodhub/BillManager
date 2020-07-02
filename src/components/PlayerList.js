import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

class PlayerList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Table responsive='lg' striped bordered hover variant='dark' size='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Buy In</th>
            <th>Chips (At the end of the Game)</th>
            <th>Gewinn und Verlust</th>
          </tr>
        </thead>
        <tbody>
          {this.props.players.map(player =>
            <tr key={player.name}>
              <td>
                {player.name}
              </td>
              <td>
                {player.buyIn}
              </td>
              <td>
                {player.chips}
              </td>
              <td>
                {player.chips - player.buyIn * 100}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
}

let mapStateToProps = state => {
  return {
    players: state.players
  }
}

let mapDispatchToProps = {}

let PlayerListContainer = connect(mapStateToProps, mapDispatchToProps)(
  PlayerList
)

export default PlayerListContainer
