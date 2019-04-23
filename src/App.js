import React, { Component } from "react";

import Card from "./Card";
import Inc from "./inc";
import Form from "./form";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Card
          src={"https://randomuser.me/api/portraits/men/65.jpg"}
          name={"Salman"}
          age={"23"}
          address={"chittoor"}
          gender={"Male"}
        />
        <Card
          src={"https://randomuser.me/api/portraits/men/65.jpg"}
          name={"Arshad"}
          age={"23"}
          address={"Bagepalli"}
          gender={"Male"}
        />

        <Card
          src={"https://randomuser.me/api/portraits/men/65.jpg"}
          name={"Tajamul"}
          age={"24"}
          address={"Ramanagaram"}
          gender={"Male"}
        /> */}
        <Inc />
        <br />
        <Form />
      </div>
    );
  }
}
export default App;
