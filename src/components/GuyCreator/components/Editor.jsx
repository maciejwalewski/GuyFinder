import React, { Component } from "react";

import { RadioGroup, RadioButton } from "react-custom-radio";
import Select from "react-select";

const options = [
  { value: "Front-end", label: "Front-end" },
  { value: "Back-end", label: "Back-end" }
];

class Editor extends Component {
  constructor(props) {
    super(props);

    const { guy } = this.props;

    this.state = {
      name: guy.name,
      surname: guy.surname,
      title: guy.title,
      avatar: guy.avatar,
      description: guy.description
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateData = this.updateData.bind(this);
    this.chooseAvatar = this.chooseAvatar.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
  }

  closeEditor() {
    this.props.closeEditor();
  }

  handleSubmit(event) {
    event.preventDefault();

    const { guy } = this.props;

    let editedGuy = {
      num: guy.num,
      name: this.state.name,
      surname: this.state.surname,
      title: this.state.title,
      avatar: this.state.avatar,
      description: this.state.description
    };

    this.props.editGuy(editedGuy);

    this.setState({
      name: "",
      surname: "",
      title: "",
      avatar: "",
      description: ""
    });

    this.props.onSubmit();
  }

  updateData(event) {
    var updateName = event.target.name;
    var updateValue = event.target.value;

    this.setState({
      [updateName]: updateValue
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
    const { guy } = this.props;

    return (
      <div className="editGuy">
        <form className="guyForm" onSubmit={this.handleSubmit}>
          <div className="closeBtn" onClick={this.closeEditor}>
            X
          </div>
          <div className="inputContainer">
            <input
              id="nameEditor"
              type="text"
              name="name"
              placeholder={guy.name}
              value={this.state.name}
              onChange={this.updateData}
            />
            <label htmlFor="nameEditor">Name</label>
          </div>
          <div className="inputContainer">
            <input
              id="surnameEditor"
              type="text"
              name="surname"
              placeholder={guy.surname}
              value={this.state.surname}
              onChange={this.updateData}
            />
            <label htmlFor="titleEditor">Surname</label>
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
            <button
              className="submitButton editButton hvr-curl-bottom-right"
              type="submit"
            >
              Submit changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;
