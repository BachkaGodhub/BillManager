import React, { Component } from "react";
import Panel from "./Panel";
import { Button } from "react-bootstrap";
import { addPlayer } from "../actions/index";
import { connect } from "react-redux";
import InputField from "./InputField";
class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      buyIn: 0,
      chips: 0,
    };
  }

  updateName = name => {
    this.setState({ name });
  };

  updateBuyIn = buyIn => {
    this.setState({ buyIn });
  };

  updateChips = chips => {
    this.setState({ chips });
  };

  handleAddPlayer = () => {
    this.props.addPlayer(this.state.name, this.state.buyIn, this.state.chips);
    this.setState({ name: "", buyIn: 0, chips: 0 });
  };

  render() {
    return (
      <Panel title="Player hinzufügen">
        <div>
          <InputField
            label="Name"
            type="text"
            addInput={e => this.updateName(e.target.value)}
            value={this.state.name}
            pattern="*"
          />
          <InputField
            label="BuyIn"
            type="number"
            addInput={e => this.updateBuyIn(e.target.value)}
            value={this.state.buyIn}
            pattern="[0-9]{10}"
          />
          <InputField
            label="Chips"
            type="number"
            addInput={e => this.updateChips(e.target.value)}
            value={this.state.chips}
            pattern="[0-9]{10}"
          />
          <Button variant="primary" onClick={this.handleAddPlayer}>
            Add player
          </Button>
        </div>
      </Panel>
    );
  }
}

let mapDispatchToProps = {
  addPlayer,
};

let AddPlayerContainer = connect(null, mapDispatchToProps)(AddPlayer);
/**
AddPlayer.propTypes = {
  onAdd: React.PropTypes.func.isRequired
}
 */
export default AddPlayerContainer;
