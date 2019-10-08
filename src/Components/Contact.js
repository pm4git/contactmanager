import React from 'react';
import PropTypes from 'prop-types';

function Contact({contact}) {

    const {name,email,phone} = contact;
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
    contact: PropTypes.object.isRequired,
};

export default Contact;
