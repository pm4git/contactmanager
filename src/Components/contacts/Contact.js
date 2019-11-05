import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../context";
import Axios from "axios";

class Contact extends Component {
    state = {showContactInfo: false};

    render() {
        let {contact} = this.props;
        const {id, name, email, phone} = contact;
        const handleShowInfoClick = () => this.setState({showContactInfo: !this.state.showContactInfo});

        const handleDeleteClick = (id, dispatch) => {
            Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            }));
        };

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{' '}
                                <i onClick={handleShowInfoClick} className="fas fa-sort-down"
                                   style={{cursor: 'pointer'}}/>
                                <i onClick={handleDeleteClick.bind(this, id, dispatch)} className="fas fa-times"
                                   style={{cursor: 'pointer', float: 'right'}}/>

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
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
