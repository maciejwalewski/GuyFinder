import React, { Component } from 'react';
import DelayLink from '../../Utilities/DelayLink';

class GuyCreator extends Component {

	constructor() {
		super();

		this.state = {
			mounted: false,
		}

		this.dismounting = this.dismounting.bind(this);
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				mounted: true,
			});
		}, 100);
	}

	dismounting() {
		this.setState({
			mounted: false,
		});
	}
	

	render() {
		const {
			mounted,
		} = this.state;

		return (
			<div className={mounted ? 'guyCreatorPage guyCreatorPage--visible' : 'guyCreatorPage'}>
				<DelayLink to='/' delay={350} onDelayStart={this.dismounting}><p>Back to Main Page</p></DelayLink>
			</div>
		);
	}
};

export default GuyCreator;