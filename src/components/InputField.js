import React, { Component } from 'react'
import Panel from './Panel'
import { Button } from 'react-bootstrap'
import { addPlayer } from '../actions/index'
import { connect } from 'react-redux'

class InputField extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='inputField'>
        <label>
          {this.props.label}:
        </label>
        <input
          type={this.props.type}
          onChange={event => this.props.addInput(event)}
          value={this.props.value}
          pattern={this.props.pattern}
        />
      </div>
    )
  }
}

export default InputField
