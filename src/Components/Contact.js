import React,{useState}  from 'react';
import PropTypes from 'prop-types';

const Contact = ({contact}) => {
    const {name, email, phone} = contact;
    const [showContactInfo, setShowContactInfo] = useState(false);
    const handleClick = () => setShowContactInfo(!showContactInfo);

    return (
        <div className="card card-body mb-3">
            <h4 style={{color: 'red'}}>{name}{' '}
                <i onClick={handleClick
                } className="fas fa-sort-down"/>
            </h4>
            {showContactInfo ? (
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>) : null}
        </div>
    );



};

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
