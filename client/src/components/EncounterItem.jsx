// import React, { Component } from "react";
// import { getOneEncounter, addComment } from "../services/api-helper";

// export default class EncounterItem extends Component {
//   state = {
//     encounter: null,
//     comment: "",
//   };
//   componentDidMount() {
//     this.setEncounter();
//   }

//   setEncounter = async () => {
//     const encounter = await getOneEncounter(this.props.encounterId);
//     this.setState({ encounter });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({
//       comment: value,
//     });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const encounter = await addEncounter(
//       this.state.comment,
//       this.state.encounter.id
//     );
//     this.setState({ encounter });
//   };

//   render() {
//     const { encounter } = this.state;
//     return (
//       <div>
//         {encounter && (
//           <>
//             <h3>{encounter.encounter_description}</h3>
//             {encounter.comments.map((comment) => (
//               <p key={comment.id}>{comment.name}</p>
//             ))}
//           </>
//         )}
//         <form onSubmit={this.handleSubmit}>
//           <select onChange={this.handleChange}>
//             <option>--Select a Comment--</option>
//             {this.props.comments.map((comment) => (
//               <option value={comment.id} key={comment.id}>
//                 {comment.name}
//               </option>
//             ))}
//           </select>
//           <button>Add a Comment</button>
//         </form>
//       </div>
//     );
//   }
// }
