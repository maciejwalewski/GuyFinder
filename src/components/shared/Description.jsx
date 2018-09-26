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
        <div className="closeButton" onClick={this.props.closeButton}>X</div>
        {description && description}
			</div>
		)
	}
}

export default Description;