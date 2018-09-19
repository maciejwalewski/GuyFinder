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
				<div className="row center-xs middle-xs">
					<label className="col-xs-1" htmlFor="name">Name:</label>
					<input
						className="col-xs-2"
						required
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.updateData}
					/>
				</div>
				<div className="row center-xs middle-xs">
					<label className="col-xs-1" htmlFor="title">Title:</label>
					<input
						className="col-xs-2"
						required
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.updateData}
					/>
				</div>
				<div className="row center-xs">
					<input className="col-xs-2" type="submit" value="Add this dude!" />
				</div>
			</form>
		);
	}
};

export default CreatorPopup;