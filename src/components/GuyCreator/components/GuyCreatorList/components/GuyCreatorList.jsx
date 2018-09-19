import React, { Component } from 'react';

import { Guy } from './Guy';

class GuyCreatorList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {
			peopleList
		} = this.props;

		return (
			<div>
				<div className="results">
					<div className="row lineNames">
						<div className="col-xs-2">Number</div>
						<div className="col-xs-2">Name</div>
						<div className="col-xs-2">Surname</div>
						<div className="col-xs-2">Title</div>
						<div className="col-xs-2 edit">edit</div>
						<div className="col-xs-2">delete</div>
					</div>
					{
						peopleList && peopleList.map((guy, index) => 
							<Guy
								key={index}
								guy={guy}
							/>
						)
					}
					
				</div>
			</div>
		);
	}
};

export default GuyCreatorList;