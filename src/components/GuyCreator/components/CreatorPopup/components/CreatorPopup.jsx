import React, { Component } from 'react';
import DelayLink from '../../../../Utilities/DelayLink';

import { RadioGroup, Radio, RadioButton } from 'react-custom-radio';

class CreatorPopup extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			surname: '',
			title: '',
			avatar: '1',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateData = this.updateData.bind(this);
		this.chooseAvatar = this.chooseAvatar.bind(this);
	}



	// SUBMIT BUTTON CLICK    
	handleSubmit(event) {
		event.preventDefault();

		let person = {                      // 1. setting person state
			num: this.props.nextId,
			name: this.state.name,
			surname: this.state.surname,
			title: this.state.title,
			avatar: this.state.avatar,

		};

		this.props.setData(person);         //2. pass person object to setData function(below)

		this.setState({         //3. reset states after click
			name: '',
			surname: '',
			title: '',
			avatar: '1',
		});
	};


	//EACH FORM ONCHANGE
	updateData(event) {
		const inputName = event.target.name;
		const inputValue = event.target.value;

		var that = this;

		this.setState({
			[inputName]: inputValue
		}, function() {
			console.log('avatar:', that.state.avatar);
		});
	};

	chooseAvatar(selectedValue) {
		var that = this;

		this.setState({
			avatar: selectedValue,
		}, function() {
			console.log('avatar:', that.state.avatar);
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
					<input
						id="title"
						required
						type="select"
						name="title"
						value={this.state.title}
						onChange={this.updateData}
					/>
					<label htmlFor="title">Title</label>
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
				{/* <div className="inputContainer">
					<input
						id="avatar1"
						type="radio"
						name="avatar"
						value="1"
						onChange={(e) => this.setState({avatar: e.target.value})}
					/>
					<input
						id="avatar2"
						type="radio"
						name="avatar"
						value="2"
						onChange={(e) => this.setState({avatar: e.target.value})}
					/>
					<input
						id="avatar3"
						type="radio"
						name="avatar"
						value="3"
						onChange={(e) => this.setState({avatar: e.target.value})}
					/>
					<input
						id="avatar4"
						type="radio"
						name="avatar"
						value="4"
						onChange={(e) => this.setState({avatar: e.target.value})}
					/>
				</div> */}
				<div className="row center-xs">
					<button className="submitButton hvr-float-shadow" type="submit">
						Add this guy!
					</button>
				</div>
			</form>
		);
	}
};

export default CreatorPopup;