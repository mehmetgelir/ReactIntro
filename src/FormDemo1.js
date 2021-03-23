import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


export default class FormDemo1 extends Component {
  state = { userName: "", city:'' };
  onChangeHandler =(event)=>{
     // this.setState({userName:event.target.value})
      let name = event.target.name;
      let value = event.target.value;

      this.setState({[name]:value})
  }

  onSubmitHandler=(event)=>{
      event.preventDefault();
      alert(this.state.userName);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <h4>User Name</h4>
          <Input name="userName" onChange={this.onChangeHandler} type="text" placeholder="User Name"></Input>
          <Label>User Name is {this.state.userName}</Label>

          <h3>City</h3>
          <Input name="city" onChange={this.onChangeHandler} type="text"></Input>
          <h3>City is {this.state.city}</h3>

          <Input type="submit" value="Save"></Input>
        </Form>
      </div>
    );
  }
}
