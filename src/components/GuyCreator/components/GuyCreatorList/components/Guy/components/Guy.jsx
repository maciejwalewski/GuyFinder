import React, { Component } from 'react';

class Guy extends Component {

	constructor() {
    super();
    
    this.removeGuy = this.removeGuy.bind(this);
  }
  
  removeGuy() {
    const {
      guy,
    } = this.props;

    this.props.removeGuy(guy);
  }

	render() {
		const {
      guy,
    } = this.props;

		return (
			<div>
        <div className="row creatorListResults">
          <div className="col-xs-2">{ guy.num }</div>
          <div className="col-xs-2">{ guy.name }</div>
          <div className="col-xs-2">surname</div>
          <div className="col-xs-2">{ guy.title }</div>
          <div className="col-xs-2 green">edit</div>
          <div className="col-xs-2 red" onClick={this.removeGuy}>delete</div>
        </div>
			</div>
		);
	}
};

export default Guy;