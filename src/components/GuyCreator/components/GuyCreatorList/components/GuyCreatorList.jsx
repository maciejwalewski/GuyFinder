import React, { Component } from 'react';

class GuyCreatorList extends Component {

	constructor() {
		super();
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
						<div className="col-xs-2">edit</div>
						<div className="col-xs-2">delete</div>
					</div>
					{
						peopleList && peopleList.map((guy, index) => 
							<div className="row creatorListResults" key={index}>
								<div className="col-xs-2">{ guy.num }</div>
								<div className="col-xs-2">{ guy.name }</div>
								<div className="col-xs-2">surname</div>
								<div className="col-xs-2">{ guy.title }</div>
								<div className="col-xs-2 green">edit</div>
								<div className="col-xs-2 red">delete</div>
							</div>
						)
					}
					
				</div>
			</div>
		);
	}
};

export default GuyCreatorList;