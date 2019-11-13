import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getContact, updateContact} from '../../actions/contactActions'


class EditContact extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        phone: "",
        errors: ""
    };


    static getDerivedStateFromProps(props, state) {
        if (state.id === "") {
            const {id, name, email, phone} = props.contact;
            if (id !== null && id !== undefined)
                return {

                    id, name, email, phone

                };
            else
                return null;
        } else {
            return null;
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getContact(id);

    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = async (e) => {

        e.preventDefault();
        const {id, name, email, phone} = this.state;

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

        this.props.updateContact({id, name, email, phone});

        this.clearState();
        this.props.history.push("/");
    };

    clearState() {
        this.setState({name: "", email: "", phone: "", errors: {}})
    }

    render() {

        const contact = this.state;
        const {name, email, phone, errors} = contact;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Edit Contact
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
                        <input type="submit" value="Update Contact"
                               className="btn btn-outline-dark btn-block"/>
                    </form>
                </div>
                {errors.general && <div className="alert alert-danger mt-3">{errors.general}</div>}
            </div>
        );
    }
}

EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    updateContact: PropTypes.func.isRequired,
    getContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
    {
        contact: state.contact.contact
    }
);

export default connect(mapStateToProps, {updateContact, getContact})(EditContact);
