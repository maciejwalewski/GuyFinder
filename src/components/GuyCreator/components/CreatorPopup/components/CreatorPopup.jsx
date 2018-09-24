import React, { Component } from 'react';
import DelayLink from '../../../../Utilities/DelayLink';

class CreatorPopup extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			title: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateData = this.updateData.bind(this);
	}



	// SUBMIT BUTTON CLICK    
	handleSubmit(event) {
		event.preventDefault();

		let person = {                      // 1. setting person state
			num: this.props.nextId,
			name: this.state.name,
			title: this.state.title,
		};

		this.props.setData(person);         //2. pass person object to setData function(below)

		this.setState({         //3. reset states after click
			name: '',
			title: '',
		});
	};


	//EACH FORM ONCHANGE
	updateData(event) {
		const inputName = event.target.name;
		const inputValue = event.target.value;

		this.setState({
			[inputName]: inputValue
		});
	};



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
						id="title"
						required
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.updateData}
					/>
					<label htmlFor="title">Title</label>
				</div>
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