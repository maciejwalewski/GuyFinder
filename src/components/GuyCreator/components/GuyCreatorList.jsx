import React, { Component } from 'react';

import { Guy } from '../';

class GuyCreatorList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			update: false,
		}
	}

	// componentWillReceiveProps() {
	// 	console.log('newprops in list!');
		
	// }

	render() {
		const {
			peopleList
		} = this.props;

		return (
			<div>
				<div className="results">
					<div className="row middle-xs center-xs lineNames">
						<div className="col-xs-1">Number</div>
						<div className="col-xs-1">Avatar</div>
						<div className="col-xs-2">Name</div>
						<div className="col-xs-2">Surname</div>
						<div className="col-xs-1">Title</div>
						<div className="col-xs-1">Description</div>
						<div className="col-xs-4"></div>
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