import React, { Component } from 'react';

import Description from '@/components/shared/Description';

import { Editor } from '../';

import avatar1 from '@/img/avatar-female1.png';
import avatar2 from '@/img/avatar-female2.png';
import avatar3 from '@/img/avatar-male1.png';
import avatar4 from '@/img/avatar-male2.png';

class Guy extends Component {

	constructor() {
    super();

    this.state = {
      editorShown: false,
      avatarSrc: '',
      descriptionShown: false,
      mounted: false,
    }
    
    this.editGuy = this.editGuy.bind(this);
    this.removeGuy = this.removeGuy.bind(this);
    this.avatarSrc = this.avatarSrc.bind(this);
    this.openDescription = this.openDescription.bind(this);
    this.closeDescription = this.closeDescription.bind(this);
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }

  openDescription() {
    this.setState({
      descriptionShown: true,
    });
  }

  closeDescription() {
    this.setState({
      descriptionShown: false,
    });
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

    switch (guy.avatar) {
      case '1':
        return avatar1;
      case '2':
        return avatar2;
      case '3':
        return avatar3;
      case '4':
        return avatar4;
      default:
        console.log('Wrong avatar path');
    }    
  }

	render() {
		const {
      guy,
    } = this.props;

    const {
      editorShown,
      descriptionShown,
    } = this.state;

		return (
			<div>
        <div className="row middle-xs center-xs creatorListResults">
          <div className="col-xs-1">{ guy.num }</div>
          <div className="col-xs-1">
            <img className="avatar" src={ this.state.mounted ? this.avatarSrc() : undefined }/>
          </div>
          <div className="col-xs-2">{ guy.name }</div>
          <div className="col-xs-2">{ guy.surname }</div>
          <div className="col-xs-1">{ guy.title }</div>
          <div className="col-xs-1 readMore">
            <span onClick={this.openDescription}>Read more</span>
            {
              descriptionShown && 
              <Description
                description={guy.description}
                closeButton={this.closeDescription}
              />
            }
          </div>
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