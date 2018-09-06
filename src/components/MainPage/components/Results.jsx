import React, { Component } from 'react';

class Results extends Component {

	constructor() {
		super();
		this.state = {
		}

	}

	render() {

		return (
			<div className="results">
				<div className="row lineNames">
					<div className="col-xs-2">Avatar</div>
					<div className="col-xs-2">Name</div>
					<div className="col-xs-2">Surname</div>
					<div className="col-xs-2">Title</div>
					<div className="col-xs-4">Technologies</div>
				</div>
				<div className="row lineNames">
					<div className="col-xs-2">Avatar</div>
					<div className="col-xs-2">Name</div>
					<div className="col-xs-2">Surname</div>
					<div className="col-xs-2">Title</div>
					<div className="col-xs-4">Technologies</div>
				</div>
			</div>
		)
	}
}

export default Results;