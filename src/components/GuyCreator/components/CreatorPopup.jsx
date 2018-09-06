import React, { Component } from 'react';
import DelayLink from '../../Utilities/DelayLink';

class CreatorPopup extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			title: '',
			tech: ''
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
			tech: this.state.tech
		};

		this.props.setData(person);         //2. pass person object to setData function(below)

		this.setState({         //3. reset states after click
			name: '',
			title: '',
			tech: ''
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
		const {
			mounted,
		} = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						required
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.updateData}
					/>
				</div>
				<div>
					<label htmlFor="title">Title:</label>
					<input
						required
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.updateData}
					/>
				</div>
				<div>
					<label htmlFor="tech">Technology:</label>
					<input
						required
						type="text"
						name="tech"
						value={this.state.tech}
						onChange={this.updateData}
					/>
				</div>
				<input type="submit" value="Add this dude!" />
			</form>
		);
	}
};

export default CreatorPopup;