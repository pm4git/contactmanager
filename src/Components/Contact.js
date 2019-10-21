import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {showContactInfo: false};
    render() {
        let {contact} = this.props;
        const {name, email, phone} = contact;
        const handleShowInfoClick = () => this.setState({showContactInfo: !this.state.showContactInfo});

        const handleDeleteClick = () => {
            this.props.deleteClickHandler();
        };

        return (
            <div className="card card-body mb-3">
                <h4>{name}{' '}
                    <i onClick={handleShowInfoClick} className="fas fa-sort-down" style={{cursor: 'pointer'}}/>
                    <i onClick={handleDeleteClick} className="fas fa-times" style={{cursor: 'pointer', float: 'right'}}/>

                </h4>
                {this.state.showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{phone}</li>
                    </ul>) : null}
            </div>
        );


    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
