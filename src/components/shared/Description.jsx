import React, { Component } from 'react';

class Description extends Component {

	constructor() {
		super();
	}

	render() {
		const {
      description,
		} = this.props;

		return (
			<div className="description">
        {description && description}
			</div>
		)
	}
}

export default Description;