import React, { Component } from 'react';

import Description from '@/components/shared/Description';

import avatar1 from '@/img/avatar-female1.png';
import avatar2 from '@/img/avatar-female2.png';
import avatar3 from '@/img/avatar-male1.png';
import avatar4 from '@/img/avatar-male2.png';

class ResultsGuy extends Component {

	constructor() {
    super();

    this.state = {
      avatarSrc: '',
      descriptionShown: false,
    }
    this.avatarSrc = this.avatarSrc.bind(this);
    this.openDescription = this.openDescription.bind(this);
    this.closeDescription = this.closeDescription.bind(this);
  }

  componentDidMount() {
    this.avatarSrc();
  }

  openDescription() {
    this.setState({
      descriptionShown: true,
    });
  }

  closeDescription() {
    var that = this;
    this.setState({
      descriptionShown: false,
    });
  }

  avatarSrc() {
    const {
      guy,
    } = this.props;

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
        console.log('Wrong avatar path');
    }

    this.setState({
      avatarSrc: guyAvatar
    });
  }

	render() {
		const {
      guy,
    } = this.props;

    const {
      descriptionShown,
    } = this.state;

		return (
      <div>
        <div className="row middle-xs center-xs creatorListResults">
          <div className="col-xs-1">
            <img className="avatar" src={this.state.avatarSrc && this.state.avatarSrc}/>
          </div>
          <div className="col-xs-2">{ guy.name }</div>
          <div className="col-xs-2">{ guy.surname }</div>
          <div className="col-xs-2">{ guy.title }</div>
          <div className="col-xs-2 readMore">
            <span onClick={this.openDescription}>Read more</span>
            {
              descriptionShown && 
              <Description
                description={guy.description}
                closeButton={this.closeDescription}
              />
            }
          </div>
          <div className="col-xs-5"></div>
        </div>
        
      </div>

		);
	}
};

export default ResultsGuy;