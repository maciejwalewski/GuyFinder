import React from 'react';
import PeopleConstructor from './PeopleConstructor';



export class PeopleConstructorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            constructorShown: false
        };

        this.slideClickHandler = this.slideClickHandler.bind(this)
    }

    slideClickHandler() {
        this.setState( prevState => (
            {
                constructorShown: !prevState.constructorShown
            }
        ))
    }

    render() {
        return (
            <div className={ this.state.constructorShown ? "person-constructor" : "person-constructor hidden" }>
                <div className={ this.state.constructorShown ? "slide-button rotation" : "slide-button" }
                onClick={this.slideClickHandler}>
                </div>
                <PeopleConstructor />
            </div>
        );
    }
}