import React, { Component } from "react";
import Panel from "./Panel";
import { Button } from "react-bootstrap";
import { deletePlayer } from "../actions/index";
import { connect } from "react-redux";

class DeletePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  updateName = name => {
    this.setState({ name });
  };

  handleDeletePlayer = () => {
    this.props.deletePlayer(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <Panel title="Player löschen">
        <div>
          <input
            onChange={e => this.updateName(e.target.value)}
            value={this.state.name}
          />
          <Button variant="primary" onClick={this.handleDeletePlayer}>
            Delete player
          </Button>
        </div>
      </Panel>
    );
  }
}

let mapStateToProps = null;

let mapDispatchToProps = {
  deletePlayer,
};

let DeletePlayerContainer = connect(mapStateToProps, mapDispatchToProps)(
  DeletePlayer
);

export default DeletePlayerContainer;
