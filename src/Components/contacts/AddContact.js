import React, {Component} from 'react';

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    render() {
        const {name, email, phone} = this.state;

        const onChange = (e) => {
            this.setState({[e.target.name]: e.target.value})
        };

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="fom-control form-control"
                                   placeholder="Enter Name..." value={name} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="fom-control form-control"
                                   placeholder="Enter Email Address..." value={email} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className="fom-control form-control"
                                   placeholder="Enter Phone..." value={phone} onChange={onChange}/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-outline-dark btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
