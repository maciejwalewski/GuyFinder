import React, { Component } from 'react';

import { Editor } from './Editor';

class Guy extends Component {

	constructor() {
    super();

    this.state = {
      editorShown: false,
    }
    
    this.editGuy = this.editGuy.bind(this);
    this.removeGuy = this.removeGuy.bind(this);
  }
  
  removeGuy() {
    const {
      guy,
    } = this.props;

    this.props.removeGuy(guy);
  }

  editGuy() {
    this.setState((prevState) => ({
      editorShown: !prevState.editorShown,
    }))
  }

	render() {
		const {
      guy,
    } = this.props;

    const {
      editorShown,
    } = this.state;

		return (
			<div>
        <div className="row creatorListResults">
          <div className="col-xs-2">{ guy.num }</div>
          <div className="col-xs-2">{ guy.name }</div>
          <div className="col-xs-2">surname</div>
          <div className="col-xs-2">{ guy.title }</div>
          <div className="col-xs-2 green" onClick={this.editGuy}>edit</div>
          <div className="col-xs-2 red" onClick={this.removeGuy}>delete</div>
        </div>
        {
          editorShown &&
          <Editor 
            guy={guy}
            onSubmit={() => {this.setState({editorShown: false})}}
          />
        }
			</div>
		);
	}
};

export default Guy;