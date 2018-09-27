import React, { Component } from 'react';

import { RadioGroup, RadioButton } from 'react-custom-radio';

import { ResultsGuy } from '../';

class Results extends Component {

	constructor() {
		super();

		this.state = {
			filter: 'all',
			peopleListState: [],
		}

		this.changeFilter = this.changeFilter.bind(this);
	}

	componentDidMount() {
		const {
			peopleList,
		} = this.props;

		this.setState({
			peopleListState: peopleList,
		})
	}

	changeFilter(selectedValue) {
		var that = this;

		this.setState({
			filter: selectedValue,
		}, function() {
			console.log(that.state.filter);

			let peopleList = that.props.peopleList;
			let newPeopleList = [];
			console.log('guystoslice:', peopleList);
			if (that.state.filter == 'Front-end') {
				for (let i = 0; i < peopleList.length; i++) {
					if (peopleList[i].title == 'Front-end') {
						newPeopleList.push(peopleList[i]);
					}
				}
			} else if (that.state.filter == 'Back-end') {
				for (let i = 0; i < peopleList.length; i++) {
					if (peopleList[i].title == 'Back-end') {
						newPeopleList.push(peopleList[i]);
					}
				}
			} else {
				for (let i = 0; i < peopleList.length; i++) {
					newPeopleList.push(peopleList[i]);
				}
			}

			that.setState({
				peopleListState: newPeopleList,
			});
		});
	}

	render() {
		
		const {
			peopleListState
		} = this.state

		return (
			<div className="results">
				<div className="filters">
					<RadioGroup
						name="filter"
						selectedValue={this.state.filter}
						onChange={this.changeFilter}
					>
						<RadioButton
							value="all" 
							className="filterButton filterButton--1" 
							useHiddenInput={true}
						>
							All
						</RadioButton>
						<RadioButton 
							value="Front-end" 
							className="filterButton filterButton--2" 
							useHiddenInput={true}
						>
							Front-end
						</RadioButton>
						<RadioButton
							value="Back-end" 
							className="filterButton filterButton--3" 
							useHiddenInput={true}
						>
							Back-end
						</RadioButton>
						
					</RadioGroup>
				</div>
				<div className="row center-xs middle-xs lineNames">
					<div className="col-xs-1"></div>
					<div className="col-xs-2">Name</div>
					<div className="col-xs-2">Surname</div>
					<div className="col-xs-2">Title</div>
					<div className="col-xs-2">Description</div>
					<div className="col-xs-5"></div>
				</div>
				{
					peopleListState && peopleListState.map((guy, index) => 
						<ResultsGuy
							key={index}
							guy={guy}
						/>
					)
				}
			</div>
		)
	}
}

export default Results;