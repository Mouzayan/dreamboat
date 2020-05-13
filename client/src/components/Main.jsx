import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import {
  getAllEncounters,
  getAllComments,
  postEncounter,
  putEncounter,
  destroyEncounter,
} from "../services/api-helper";
import ShowComments from "./ShowComments";
import ShowEncounters from "./ShowEncounters";
import ShowUsers from "./ShowUsers";
import CreateEncounter from "./CreateEncounter";
import CreateComment from "./CreateComment";
import UpdateEncounter from "./UpdateEncounter";
import UpdateUser from "./UpdateUser";
import UserItem from "./UserItem";
import EncounterItem from "./EncounterItem";
import CommentItem from "./CommentItem";

export default class Main extends Component {
  state = {
    users: [],
    encounters: [],
    comments: [],
  };

  componentDidMount() {
    this.readAllEncounters();
    this.readAllComments();
  }

 
  readAllEncounters = async () => {
    const encounters = await getAllEncounters();
    this.setState({ encounters });
  };

  readAllComments = async () => {
    const comments = await getAllComments();
    this.setState({ comments });
  };

  handleEncounterSubmit = async (userId, encounterData) => {
    const newEncounter = await postEncounter(userId, encounterData);
    this.setState((prevState) => ({
      encounters: [...prevState.encounters, newEncounter],
    }));
  };


  handleEncounterUpdate = async (userId, encounterId, encounterData) => {
    const updatedEncounter = await putEncounter(userId, encounterId, encounterData);
    this.setState((prevState) => ({
      encounters: prevState.encounters.map((encounter) => {
        return encounter.id === encounterId
          ? updatedEncounter
          : encounter;
      }),
    }));
  };

  handleEncounterDelete = async (userId, encounterId) => {
    await destroyEncounter(userId, encounterId);
    this.setState((prevState) => ({
      encounters: prevState.encounters.filter((encounter) => {
        return encounter.id !== encounterId;
      }),
    }));
  };

  render() {
    // debugger
    return (
      <main>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} handleRegister={this.props.handleRegister} />
          )}
        />
        {/* <Route
          path="/encounters"
          render={() => <ShowEncounters encounters={this.state.encounters} />}
        /> */}
        <Route
          exact
          path="/encounters"
          render={(props) => (
            <ShowEncounters
              {...props}
              handleEncounterDelete={this.handleEncounterDelete}
              encounters={this.state.encounters}
              currentUser={this.props.currentUser}
            />
          )}
        />
        
<Route
          exact
          path="/encounters/:id"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <EncounterItem
                encounterId={id}
                comments={this.state.comments}
                currentUser={this.props.currentUser}
              />
            );
          }}
        />

        <Route
          exact
          path="/user/encounters/new"
          render={(props) => (
            <CreateEncounter
              {...props}
              handleEncounterSubmit={this.handleEncounterSubmit}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <Route
          exact
          path="/encounters/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <UpdateEncounter
                {...props}
                handleEncounterUpdate={this.handleEncounterUpdate}
                encounterId={id}
                currentUser={this.props.currentUser}
              />
            );
          }}
        />
        
      </main>
    );
  }
}
