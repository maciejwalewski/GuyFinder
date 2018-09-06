import React from 'react';


export class Person extends React.Component {

    constructor(props){
        super();
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleRemove(){
        this.props.remove(this.props.num);
    }

    handleEdit(){
        this.props.edit(this.props.num);
    }

    render() {
        return (
            <tr>
                <td>{this.props.num}</td>
                <td>{this.props.name}</td>
                <td>{this.props.title}</td>
                <td>{this.props.tech}</td>
                <td>
                    <img onClick={this.handleRemove} className="trash_icon" src={require("../img/trash.png")} />
                    <img onClick={this.handleEdit} className="edit_icon" src={require("../img/edit.png")} />
                </td>
            </tr>
        );
    }
}