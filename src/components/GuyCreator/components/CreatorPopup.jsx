import React, { Component } from "react";

import { RadioGroup, RadioButton } from "react-custom-radio";
import Select from "react-select";

const options = [
  { value: "Front-end", label: "Front-end" },
  { value: "Back-end", label: "Back-end" }
];

class CreatorPopup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      title: "",
      avatar: "1",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateData = this.updateData.bind(this);
    this.chooseAvatar = this.chooseAvatar.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
  }

  // SUBMIT BUTTON CLICK
  handleSubmit(event) {
    event.preventDefault();

    let person = {
      // 1. setting person state
      num: this.props.nextId,
      name: this.state.name,
      surname: this.state.surname,
      title: this.state.title,
      avatar: this.state.avatar,
      description: this.state.description
    };

    this.props.setData(person); //2. pass person object to setData function(below)

    this.setState({
      //3. reset states after click
      name: "",
      surname: "",
      title: "",
      avatar: "1",
      description: ""
    });
  }

  //EACH FORM ONCHANGE
  updateData(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  chooseAvatar(selectedValue) {
    this.setState({
      avatar: selectedValue
    });
  }

  selectTitle(event) {
    this.setState({
      title: event.value //REACT-SELECT sending object from 'options' instead of whole event(they might update it since today)
    });
  }

  render() {
    return (
      <form className="guyForm" onSubmit={this.handleSubmit}>
        <div className="inputContainer">
          <input
            id="name"
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateData}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="inputContainer">
          <input
            id="surname"
            required
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.updateData}
          />
          <label htmlFor="surname">Surname</label>
        </div>
        <div className="inputContainer">
          <Select
            onChange={this.selectTitle}
            options={options}
            placeholder="Title"
            isClearable={false}
          />
        </div>
        <div className="inputContainer">
          <RadioGroup
            name="avatar"
            selectedValue={this.state.avatar}
            onChange={this.chooseAvatar}
          >
            <RadioButton
              value="1"
              className="avatarButton1"
              useHiddenInput={true}
            />
            <RadioButton
              value="2"
              className="avatarButton2"
              useHiddenInput={true}
            />
            <RadioButton
              value="3"
              className="avatarButton3"
              useHiddenInput={true}
            />
            <RadioButton
              value="4"
              className="avatarButton4"
              useHiddenInput={true}
            />
          </RadioGroup>
        </div>
        <div className="inputContainer inputContainer--description">
          <textarea
            id="description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.updateData}
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="row center-xs">
          <button className="submitButton hvr-float-shadow" type="submit">
            Add this guy!
          </button>
        </div>
      </form>
    );
  }
}

export default CreatorPopup;
