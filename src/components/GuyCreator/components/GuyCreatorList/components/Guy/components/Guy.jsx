import React, { Component } from 'react';

import { Editor } from './Editor';

import avatar1 from '@/img/avatar-female1.png';
import avatar2 from '@/img/avatar-female2.png';
import avatar3 from '@/img/avatar-male1.png';
import avatar4 from '@/img/avatar-male2.png';

class Guy extends Component {

	constructor() {
    super();

    this.state = {
      editorShown: false,
    }
    
    this.editGuy = this.editGuy.bind(this);
    this.removeGuy = this.removeGuy.bind(this);
    this.avatarSrc = this.avatarSrc.bind(this);
  }

  componentDidMount() {
    this.avatarSrc();
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

  avatarSrc() {
    const {
      guy,
    } = this.props;

    console.log(guy.avatar);

    let guyAvatar;

    switch (guy.avatar) {
      case '1':
        guyAvatar = avatar1;
        break;
      case '2':
        guyAvatar = avatar2;
        break;
      case '3':
        guyAvatar = avatar3;
        break;
      case '4':
        guyAvatar = avatar4;
        break;
      default:
        console.log('nima');
    }

    console.log('avatar:', guyAvatar);

    this.setState({
      avatarSrc: guyAvatar
    });
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
        <div className="row middle-xs creatorListResults">
          <div className="col-xs-1">{ guy.num }</div>
          <div className="col-xs-2">
            <img className="avatar" src={this.state.avatarSrc && this.state.avatarSrc}/>
          </div>
          <div className="col-xs-1">{ guy.name }</div>
          <div className="col-xs-2">{ guy.surname }</div>
          <div className="col-xs-2">{ guy.title }</div>
          <div className="col-xs-2">Read more</div>
          <div className="col-xs-1 green" onClick={this.editGuy}>edit</div>
          <div className="col-xs-1 red" onClick={this.removeGuy}>delete</div>
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