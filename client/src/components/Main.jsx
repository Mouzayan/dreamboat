import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import {
  getAllUsers,
  getAllEncounters,
  getOneEncounter,
  getAllComments,
  postEncounter,
  putEncounter,
  destroyEncounter,
  postComment,
} from "../services/api-helper";
import ShowEncounters from "./ShowEncounters";
import CreateEncounter from "./CreateEncounter";
import UpdateEncounter from "./UpdateEncounter";
import EncounterItem from "./EncounterItem";
import Home from "./Home";
import UserLanding from "./UserLanding";

export default class Main extends Component {
  state = {
    users: [],
    encounters: [],
    comments: [],
  };

  componentDidMount() {
    this.readAllEncounters();
    this.readAllComments();
    this.readAllUsers();
  }

  readAllEncounters = async () => {
    const encounters = await getAllEncounters();
    this.setState({ encounters });
  };

  readAllUsers = async () => {
    const users = await getAllUsers();
    this.setState({ users });
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
    const updatedEncounter = await putEncounter(
      userId,
      encounterId,
      encounterData
    );
    this.setState((prevState) => ({
      encounters: prevState.encounters.map((encounter) => {
        return encounter.id === encounterId ? updatedEncounter : encounter;
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

  handleCommentSubmit = async (userId, encounterData) => {
    const newComment = await postComment(userId, encounterData);
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  render() {
    // debugger
    return (
      <main>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} currentUser={this.props.currentUser}
              handleLogout={this.props.handleLogout}
              users={this.state.users}
              />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/sign-up"
          render={(props) => (
            <Register {...props} handleRegister={this.props.handleRegister}
            currentUser={this.props.currentUser}/>
          )}
        />

        <Route
          exact
          path="/users/:id"
          render={(props) => (
            <UserLanding {...props} currentUser={this.props.currentUser}
              handleLogout={this.props.handleLogout}
              users={this.state.users}
              />
          )}
        />
        
        <Route
          exact
          path="/users/:id/encounters"
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
          path="/users/:userId/encounters/:encounterId"
          render={(props) => {
            return (
              <EncounterItem
                encounterId={props.match.params.encounterId}
                userId={props.match.params.userId}
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
