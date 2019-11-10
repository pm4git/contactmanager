import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../context";
import Axios from "axios";
import {Link} from "react-router-dom";

class Contact extends Component {
    state = {showContactInfo: false};

    render() {
        let {contact} = this.props;
        const {id, name, email, phone} = contact;
        const handleShowInfoClick = () => this.setState({showContactInfo: !this.state.showContactInfo});

        const handleDeleteClick = async (id, dispatch) => {
            await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            });
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
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
