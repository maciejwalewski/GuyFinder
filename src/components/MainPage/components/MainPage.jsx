import React, { Component } from 'react';
import DelayLink from '../../Utilities/DelayLink';

class MainPage extends Component {

	constructor() {
		super();
		this.state = {
			searchPersonShown: false,
			searchTechShown: false,
			mounted: false,
		}

		this.togglePersonSearch = this.togglePersonSearch.bind(this);
		this.toggleTechSearch = this.toggleTechSearch.bind(this);
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

	togglePersonSearch() {
		this.setState(prevState => (
			{
				searchPersonShown: !prevState.searchPersonShown
			}
		))
	};

	toggleTechSearch() {
		this.setState(prevState => (
			{
				searchTechShown: !prevState.searchTechShown
			}
		))
	};



	render() {
		const {
			mounted
		} = this.state;
		return (
			<div className={mounted ? 'mainPage mainPage--visible' : 'mainPage'}>
				<ul>
					<li href="#" onClick={this.togglePersonSearch}>Person search</li>
					<li href="#" onClick={this.toggleTechSearch}>Technology search</li>
					<DelayLink to='/creator/' delay={350} onDelayStart={this.dismounting}><p>Go to Creator</p></DelayLink>
				</ul>
				<ul className="searchBar">
					<li>
						<input
							className={this.state.searchPersonShown ? "searchInput" : "searchInput hidden"}
							type="text" />
					</li>
					<li>
						<input
							className={this.state.searchTechShown ? "searchInput" : "searchInput hidden"}
							type="text" />
					</li>
				</ul>
			</div>
		);
	}
};

export default MainPage;