import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";


class EditContact extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        phone: "",
        errors: ""
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        try {
            const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const contact = res.data;
            this.setState(
                {
                    id: contact.id,
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone
                });
        } catch (e) {

        }
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
        try {
            await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {id, name, email, phone});
        } catch (e) {
            this.setState({errors: {general: e.message}});
            return;
        }

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

export default EditContact;
