import React, { Component } from 'react';

import { ResultsGuy } from '../';

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
				<div className="row center-xs middle-xs lineNames">
					<div className="col-xs-1"></div>
					<div className="col-xs-2">Name</div>
					<div className="col-xs-2">Surname</div>
					<div className="col-xs-2">Title</div>
					<div className="col-xs-2">Description</div>
					<div className="col-xs-5"></div>
				</div>
				{
					peopleList && peopleList.map((guy, index) => 
						<ResultsGuy
							key={index}
							guy={guy}
						/>
					)
				}
			</div>
		)
	}
}

export default Results;