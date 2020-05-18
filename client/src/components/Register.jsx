import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="centered">
      <form className="formContainer" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.history.push('/');
      }}>
        <p className="formTitle">Register</p>
        <label className="formLabel" htmlFor="username">username:</label>
        <input className="formInput"
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label className="formLabel" htmlFor="email">email:</label>
        <input className="formInput"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label className="formLabel" htmlFor="password">password:</label>
        <input className="formInput"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button className="formSubmit">Submit</button>
        </form>
        </div>
    )
  }
}
