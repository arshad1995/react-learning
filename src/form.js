import React, { Component } from "react";

export default class Form extends Component {
  //initializing the state before render method is called
  state = {
    firstName: "",
    lastName: ""
  };
  handleFirstName = async event => {
    //on each character this function will be called and we are firstName state using setState function
    await this.setState({ firstName: event.target.value });
    console.log(this.state.firstName);
  };
  handleLastName = async event => {
    //sa
    await this.setState({ lastName: event.target.value });
    console.log(this.state.lastName);
  };
  handleSubmit = () => {
    alert(
      this.state.firstName +
        " " +
        this.state.lastName +
        " " +
        "Successfully submited"
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Firstname:
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstName}
          />
          <br />
          <br />
          Lastname:
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastName}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
