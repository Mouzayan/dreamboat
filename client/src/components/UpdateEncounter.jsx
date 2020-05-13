import React, { Component } from "react";
import { getOneEncounter } from "../services/api-helper";

export default class UpdateEncounter extends Component {
  state = {
    encounter_description: "",
    user_id: this.props.currentUser.id,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      encounter_description: value,
    });
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const encounterItem = await getOneEncounter(this.props.encounterId);
    this.setState({
      encounter_description: encounterItem.encounter_description,
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEncounterUpdate(this.props.currentUser.id, this.props.encounterId, this.state);
          this.props.history.push("/encounters");
        }}

        // this.props.handleEncounterSubmit(this.props.currentUser.id, this.state);
      >
        <h3>Update Encounter</h3>
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
