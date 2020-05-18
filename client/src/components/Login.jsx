import React, { Component } from 'react'

import './Login.css'
import Hero from './Hero'

export default class Login extends Component {
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
      <Hero>
      <div className="centered">
        
      <form className="formContainer" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.props.history.push("/users/:id");
      }}>

        <p className="formTitle">Login</p>
        <label className="formLabel" htmlFor="username">username</label>
        <input className="formInput"
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label className="formLabel" htmlFor="email">email</label>
        <input className="formInput"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label className="formLabel" htmlFor="password">password</label>
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
        </Hero>
        
    )
  }
}
