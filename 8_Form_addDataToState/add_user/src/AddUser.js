import React, { Component } from 'react';

class AddUser extends Component {
    state = { 
        name: null,
        surname: null,
        age:null
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.newData(this.state);
    }
    render() {
        return (
            <div>
                <h1>Add User</h1>
                <form onSubmit={ this.handleSubmit } className="add-form">
                    <input type="text" id="name" onChange={ this.handleChange } />
                    <input type="text" id="surname" onChange={ this.handleChange } />
                    <input type="number" id="age" onChange={ this.handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;