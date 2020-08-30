import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        question: "",
        answer: ""
      },
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handlequestion = this.handlequestion.bind(this);
    this.handleanswer = this.handleanswer.bind(this);
    this.handleanswer1 = this.handleanswer1.bind(this);
    this.handleanswer2 = this.handleanswer2.bind(this);
    this.handleanswer3 = this.handleanswer3.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handlequestion(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
         question: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleanswer(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          answer: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleanswer1(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          answer1: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleanswer2(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          answer2: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleanswer3(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          answer3: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        question: "",
        answer: "",
        
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          title={"question"}
          name={"question"}
          value={this.state.newUser.name}
          placeholder={"Question"}
          handleChange={this.handlequestion}
        />{" "}
         {/* Question*/}
         <Input
          inputType={"text"}
          title={"answer"}
          name={"answer"}
          value={this.state.newUser.name}
          placeholder={"answer 1"}
          handleChange={this.handleanswer}
        />{" "}
        {/* Answer */}
        <Input
          inputType={"text"}
          title={"answer"}
          name={"answer"}
          value={this.state.newUser.name}
          placeholder={"answer 2"}
          handleChange={this.handleanswer1}
        />{" "}
        {/* Answer */}
        <Input
          inputType={"text"}
          title={"answer"}
          name={"answer"}
          value={this.state.newUser.name}
          placeholder={"answer 3"}
          handleChange={this.handleanswer2}
        />{" "}
        {/* Answer */}
        <Input
          inputType={"text"}
          title={"answer"}
          name={"answer"}
          value={this.state.newUser.name}
          placeholder={"answer 4"}
          handleChange={this.handleanswer3}
        />{" "}
        {/* Answer */}
       
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
