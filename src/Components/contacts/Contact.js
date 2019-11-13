import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {deleteContact} from "../../actions/contactActions";
import {connect} from "react-redux";

class Contact extends Component {
    state = {showContactInfo: false};

    render() {
        let {contact} = this.props;
        const {id, name, email, phone} = contact;
        const handleShowInfoClick = () => this.setState({showContactInfo: !this.state.showContactInfo});

        const handleDeleteClick = async (id) => {
            this.props.deleteContact(id)
        };

        return (
            <div className="card card-body mb-3">
                <h4>{name}{' '}
                    <i onClick={handleShowInfoClick} className="fas fa-sort-down"
                       style={{cursor: 'pointer'}}/>
                    <i onClick={handleDeleteClick.bind(this, id)} className="fas fa-times"
                       style={{cursor: 'pointer', float: 'right'}}/>
                    <Link to={`/contact/edit/${id}`}>
                        <i
                            className="fas fa-pencil-alt"
                            style={{
                                cursor: 'pointer',
                                float: 'right',
                                color: 'black',
                                marginRight: '1rem'
                            }}/>
                    </Link>

                </h4>
                {this.state.showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{phone}</li>
                    </ul>) : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default connect(null, {deleteContact})(Contact);
