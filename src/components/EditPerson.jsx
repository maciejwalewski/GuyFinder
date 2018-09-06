import React from 'react';
import { connect } from 'react-redux';


class EditPerson extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            title: '',
            tech: ''

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let currentPerson = this.props.personIndex;
        let name = this.state.name;
        let title = this.state.title;
        let tech = this.state.tech;

        this.props.editPerson(currentPerson, name, title, tech);

        this.setState({
            name: '',
            title: '',
            tech: ''
        });

        this.props.onSubmit();
    }

    updateData(event) {

        var updateName = event.target.name;
        var updateValue = event.target.value;

        this.setState({
            [updateName]: updateValue,
        });
    }


    render() {
        return (
            <div className="editPerson">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text"
                            name="name"
                            placeholder={this.props.personName}
                            value={this.state.name} 
                            onChange={this.updateData}
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text" 
                            name="title" 
                            placeholder={this.props.personTitle}
                            value={this.state.title} 
                            onChange={this.updateData}
                        />
                    </div>
                    <div>
                        <label htmlFor="tech">Technology:</label>
                        <input 
                            type="text" 
                            name="tech"
                            placeholder={this.props.personTech}
                            value={this.state.tech}
                            onChange={this.updateData}
                        />
                    </div>
                    <input type="submit" value="Edit this dude!" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let current = state.peopleReducer.currentPerson;
    return {
        personIndex: state.peopleReducer.currentPerson,
        personName: state.peopleReducer.list[current].name,
        personTitle: state.peopleReducer.list[current].title,
        personTech: state.peopleReducer.list[current].tech,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPerson: (currentPerson, name, title, tech) =>
            dispatch({
                type: "EDIT_EMPLOYEE",
                payload: currentPerson,
                namePayload: name,
                titlePayload: title,
                techPayload: tech
            })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);