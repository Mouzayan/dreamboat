import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
// import {
//   getAllUsers,
//   getAllEncounters,
//   getAllComments,
//   postEncounter,
//   postComment,
//   putEncounter,
//   putUser,
//   destroyEncounter,
// } from "../services/api-helper";
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

  // componentDidMount() {
  //   this.readAllUsers();
  //   this.readAllEncounters();
  //   this.readAllComments();
  // }

  // readAllUsers = async () => {
  //   const users = await getAllUsers();
  //   this.setState({ users });
  // };

  // readAllEncounters = async () => {
  //   const encounters = await getAllEncounters();
  //   this.setState({ encounters });
  // };

  // readAllComments = async () => {
  //   const comments = await getAllComments();
  //   this.setState({ comments });
  // };

  // handleEncounterSubmit = async (encounterData) => {
  //   const newEncounter = await postEncounter(encounterData);
  //   this.setState((prevState) => ({
  //     encounters: [...prevState.encounters, newEncounter],
  //   }));
  // };

  // handleCommentSubmit = async (commentData) => {
  //   const newComment = await postComment(commentData);
  //   this.setState((prevState) => ({
  //     comments: [...prevState.comments, newComment],
  //   }));
  // };

  // handleUserUpdate = async (userId, userData) => {
  //   const updatedUser = await putUser(userId, userData);
  //   this.setState((prevState) => ({
  //     users: prevState.users.map((user) => {
  //       return user.userId === userId ? updatedUser : user;
  //     }),
  //   }));
  // };

  // handleEncounterUpdate = async (encounterId, encounterData) => {
  //   const updatedEncounter = await putEncounter(encounterId, encounterData);
  //   this.setState((prevState) => ({
  //     encounters: prevState.encounters.map((encounter) => {
  //       return encounter.encounterId === encounterId
  //         ? updatedEncounter
  //         : encounter;
  //     }),
  //   }));
  // };

  // handleEncounterDelete = async (encounterId) => {
  //   await destroyEncounter(encounterId);
  //   this.setState((prevState) => ({
  //     encounters: prevState.encounters.filter((encounter) => {
  //       return encounter.encounterId !== encounterId;
  //     }),
  //   }));
  // };

  render() {
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
          path="/flavors"
          render={() => <ShowFlavors flavors={this.state.flavors} />}
        /> */}
        {/* <Route
          exact
          path="/foods"
          render={(props) => (
            <ShowFoods
              {...props}
              handleFoodDelete={this.handleFoodDelete}
              foods={this.state.foods}
            />
          )}
        /> */}
        {/* <Route
          path="/foods/new"
          render={(props) => (
            <CreateFood {...props} handleFoodSubmit={this.handleFoodSubmit} />
          )}
        /> */}
        {/* <Route
          path="/foods/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <UpdateFood
                {...props}
                handleFoodUpdate={this.handleFoodUpdate}
                foodId={id}
              />
            );
          }}
        /> */}
        {/* <Route
          exact
          path="/foods/:id"
          render={(props) => {
            const { id } = props.match.params;
            return <FoodItem foodId={id} flavors={this.state.flavors} />;
          }}
        /> */}
      </main>
    );
  }
}
