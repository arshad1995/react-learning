import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="a">
        <img src={this.props.src} />

        <p>Name : {this.props.name}</p>
        <p>Address:{this.props.address}</p>
        <p>Age: {this.props.age}</p>
        <p>Gender: {this.props.gender}</p>
      </div>
    );
  }
}
export default Card;
