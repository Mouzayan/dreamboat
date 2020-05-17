import React, { Component } from "react";

import './CreateEncounter.css'

export default class CreateEncounter extends Component {
  state = {
    encounter_description: "",
    user_id: this.props.currentUser.id
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="inputFormDiv">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEncounterSubmit(this.props.currentUser.id, this.state);
         
          this.props.history.push("/users/:id/encounters");
        }}
      >
        <p className="inputFormTitle">Create Encounter</p>
        <input className="inputFields"
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



