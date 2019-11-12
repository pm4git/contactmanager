import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import {addContact} from "../../actions/contactActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types'

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

    onSubmit = async (e) => {

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
            name,
            email,
            phone
        };
        this.props.addContact(newContact);
        //await Axios.post('https://jsonplaceholder.typicode.com/posts', newContact);
        this.clearState();
        this.props.history.push("/");
    };

    clearState() {
        this.setState({name: "", email: "", phone: "", errors: {}})
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
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

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default connect(null, {addContact})(AddContact);
