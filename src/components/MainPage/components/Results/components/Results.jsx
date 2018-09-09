import React, { Component } from 'react';

class Results extends Component {

	constructor() {
		super();
	}

	render() {
		const {
			peopleList,
		} = this.props;

		return (
			<div className="results">
				<div className="row lineNames">
					<div className="col-xs-2">Name</div>
					<div className="col-xs-2">Surname</div>
					<div className="col-xs-2">Title</div>
				</div>
				{
					peopleList && peopleList.map((guy, index) => 
						<div className="row resultsElement" key={index}>
							<div className="col-xs-2">{ guy.name }</div>
							<div className="col-xs-2">surname</div>
							<div className="col-xs-2">{ guy.title }</div>
						</div>
					)
				}
			</div>
		)
	}
}

export default Results;