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
      <div className="inputFormDiv">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleEncounterUpdate(
              this.props.currentUser.id,
              this.props.encounterId,
              this.state
            );
            this.props.history.push("/users/:id/encounters");
          }}

          // this.props.handleEncounterSubmit(this.props.currentUser.id, this.state);
        >
          <p className="inputFormTitle">Update Encounter</p>
          <input
            className="inputFields"
            type="textarea"
            name="encounter_description"
            cols={5}
            rows={5}
            value={this.state.encounter_description}
            onChange={this.handleChange}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
