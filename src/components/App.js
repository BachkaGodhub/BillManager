import React, { Component } from 'react'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'
import DeletePlayer from './DeletePlayer'
import addPlayer from '../reducers/index'
import { connect } from 'react-redux'
import './App.css'
import Panel from './Panel'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='App'>
        <Panel title='Player'>
          <PlayerList />
        </Panel>
        <br />
        <AddPlayer />
        <br />
        <DeletePlayer />
      </div>
    )
  }
}

let mapStateToProps = function (state) {
  return {
    value: state
  }
}

let mapDispatchToProps = {
  onAddPlayer: addPlayer
}

let AppConnector = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnector
