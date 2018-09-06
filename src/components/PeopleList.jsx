import React from 'react';
import { connect } from 'react-redux';

import { Person } from './Person';
import EditPerson from './EditPerson';


class PeopleList extends React.Component {


    constructor(props){
        super();

        this.state = {
            editorShown: false
        }

        this.editPerson = this.editPerson.bind(this);
        this.removePerson = this.removePerson.bind(this);
    }

    editPerson(num){
        this.setState({
            editorShown: true,
            personIndex: num
        })
        console.log('editing...' + num);
        this.props.editEmployee(num)
    }

    removePerson(num){
        console.log('removing..' + num);
        this.props.removeEmployee(num);
    }

    render() {
        return (
            <div>
                <table className="peopleHeader">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Technology</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Person
                            num="0"
                            name="Judite"
                            title="Junior Front End"
                            tech="JavaScript"
                            remove={this.removePerson}
                            edit={this.editPerson}
                        />
                        {
                            this.props.peopleArray.map((par, key) => 
                                <Person
                                    key={key+1}
                                    {...par}
                                    remove={this.removePerson}
                                    edit={this.editPerson}
                                />
                            )
                        }
                    </tbody>
                </table>
                {this.state.editorShown ? <EditPerson onSubmit={() => this.setState({editorShown: false})} /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {            //state from peopleReducer changed to props(to use in <Person/> props)
    return {
        peopleArray: state.peopleReducer.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeEmployee: (employeeNum) =>
            dispatch({
                type: 'REMOVE_EMPLOYEE',
                payload: employeeNum
            }),
        
        editEmployee: (employeeNum) =>
            dispatch({
                type: 'EDIT_EMPLOYEE',
                payload: employeeNum
            })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);