import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {


    render() {
        const contacts = [
            {
                id: 1,
                name: 'John Wick',
                email: 'jw@gmail.com',
                phone: '444-444-444'
            }
        ];
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> list</h1>
                {contacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
            </React.Fragment>
        )


    };
}

export default Contacts;

