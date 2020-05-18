import React, { Component } from "react";
import { getOneEncounter, postComment } from "../services/api-helper";

import './EncounterItem.css'

export default class EncounterItem extends Component {
  state = {
    encounter: null,
    comment: "",
    commentData: {
      encounter_comment: "",
      encounter_id: this.props.encounterId,
      user_id: this.props.userId,
    },
  };

  componentDidMount() {
    this.setEncounter(this.props.userId, this.props.encounterId);
  }

  setEncounter = async (userId, encounterId) => {
    const encounter = await getOneEncounter(userId, encounterId);
    this.setState({ encounter });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      commentData: {
        encounter_comment: value,
      },
    });
  };

  handleSubmit = async () => {
    const newComment = await postComment(
      this.props.currentUser.id,
      this.props.encounterId,
      this.state.commentData
    ); 
    this.setState(prevState => ({
      encounter: {
        ...prevState.encounter, 
        comments: [
          ...prevState.encounter.comments,
          newComment
        ]
      }
    }))
  }

  render() {
    const { encounter } = this.state;
    return (
      <div>
        {encounter && (
          <>
            <div className="encntrCmntDiv">
            <p className="encounterText">{encounter.encounter_description}</p>
            {encounter.comments.map((comment) => (
              <p className="commentText" key={comment.id}><span className="bullet">.</span>{comment.encounter_comment}</p>
              
            ))}
              </div>
          </>
        )}
      <div className="inputFormDiv">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <p className="inputFormTitle">Create Comment</p>
          <input className="inputFields"
            type="text"
            value={this.state.commentData.encounter_comment}
            onChange={this.handleChange}
          />
          <button className="btn">Submit</button>
        </form>
        </div>
        </div>
    );
  }
}
