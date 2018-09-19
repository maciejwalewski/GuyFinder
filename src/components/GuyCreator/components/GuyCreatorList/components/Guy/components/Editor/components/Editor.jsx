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
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							name="name"
							placeholder={guy.name}
							value={this.state.name}
							onChange={this.updateData}
						/>
					</div>
					<div>
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							name="title"
							placeholder={guy.title}
							value={this.state.title}
							onChange={this.updateData}
						/>
					</div>
					<input type="submit" value="Submit changes" />
				</form>
			</div>
		)
	}
}

export default Editor;