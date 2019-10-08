import React from 'react';
import PropTypes from 'prop-types';

function Contact({name, email, phone}) {

    return (
        <div className="card card-body mb-3">
            <h4 style={{color: 'red'}}>{name}</h4>
            <ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
            </ul>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact;
