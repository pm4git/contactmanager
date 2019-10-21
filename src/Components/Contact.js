import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    state={};

    onShowContactClick = (e) => {
        console.log(e.target);
    };

    render() {

        let {contact} = this.props;
        const {name, email, phone} = contact;

        return (
            <div className="card card-body mb-3">
                <h4 style={{color: 'red'}}>{name}
                    <i onClick={this.onShowContactClick} className="fas fa-sort-down"/>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
