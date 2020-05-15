import React, { Component } from "react";

export default class CreateEncounter extends Component {
  state = {
    encounter_description: "",
    user_id: this.props.currentUser.id
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      encounter_description: value,
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEncounterSubmit(this.props.currentUser.id, this.state);
          // this.props.history.push("/encounters");
          this.props.history.push("/users/:id/encounters");
        }}
      >
        <h3>Create Encounter</h3>
        <input
          type="text"
          value={this.state.encounter_description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
