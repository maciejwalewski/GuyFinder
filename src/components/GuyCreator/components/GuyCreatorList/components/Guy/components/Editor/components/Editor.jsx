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
					<div className="row center-xs middle-xs">
						<label className="col-xs-1" htmlFor="name">Name:</label>
						<input
							className="col-xs-2"
							type="text"
							name="name"
							placeholder={guy.name}
							value={this.state.name}
							onChange={this.updateData}
						/>
					</div>
					<div className="row center-xs middle-xs">
						<label className="col-xs-1" htmlFor="title">Title:</label>
						<input
							className="col-xs-2"
							type="text"
							name="title"
							placeholder={guy.title}
							value={this.state.title}
							onChange={this.updateData}
						/>
					</div>
					<div className="row center-xs">
						<input className="col-xs-2" type="submit" value="Submit changes" />
					</div>
				</form>
			</div>
		)
	}
}

export default Editor;