import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: ""
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (dispatch, e) => {

        e.preventDefault();
        const {name, email, phone} = this.state;

        if (name === "") {
            this.setState({errors: {name: "Name is required"}});
            return;
        }
        if (email === "") {
            this.setState({errors: {email: "Email is required"}});
            return;
        }
        if (phone === "") {
            this.setState(
                {errors: {phone: "Phone is required"}});
            return;
        }
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({type: "ADD_CONTACT", payload: newContact});
        this.clearState();
        this.props.history.push("/");
    };

    clearState() {
        this.setState({name: "", email: "", phone: "", errors: {}})
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="card mb-3">
                                <div className="card-header">
                                    Add Contact
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup label="Name" name="name" value={name}
                                                        placeHolder="Enter Name..." onChange={this.onChange}
                                                        error={errors.name}/>
                                        <TextInputGroup type="email" label="Email" name="email" value={email}
                                                        placeHolder="Enter Email..." onChange={this.onChange}
                                                        error={errors.email}/>
                                        <TextInputGroup type="phone" label="Phone" name="phone" value={phone}
                                                        placeHolder="Enter Phone..." onChange={this.onChange}
                                                        error={errors.phone}/>
                                        <input type="submit" value="Add Contact"
                                               className="btn btn-outline-dark btn-block"/>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }
}

export default AddContact;
