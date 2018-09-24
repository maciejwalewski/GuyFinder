import React, { Component } from 'react';

class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			title: '',
			tech: ''

		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateData = this.updateData.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		const {
			guy,
		} = this.props;

		let editedGuy = {
			num: guy.num,
			name: this.state.name,
			title: this.state.title,
		}

		this.props.editGuy(editedGuy);

		this.setState({
			name: '',
			title: '',
			tech: ''
		});

		this.props.onSubmit();
	}

	updateData(event) {

		var updateName = event.target.name;
		var updateValue = event.target.value;

		this.setState({
			[updateName]: updateValue,
		});
	}


	render() {
		const {
			guy,
		} = this.props;

		return (
			<div className="editGuy">
				<form className="guyForm" onSubmit={this.handleSubmit}>
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
							id="titleEditor"
							type="text"
							name="title"
							placeholder={guy.title}
							value={this.state.title}
							onChange={this.updateData}
						/>
						<label htmlFor="titleEditor">Title</label>
					</div>
					<div className="row center-xs">
						<button className="submitButton editButton hvr-curl-bottom-right" type="submit">
							Submit changes
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Editor;