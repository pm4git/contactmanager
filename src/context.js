import React, {Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case "ADD_CONTACT": {
            console.log(action.payload);
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        }
        default:
            return state;
    }
};

export default class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "johndoe@op.pl",
                phone: "555-555-555"
            },
            {
                id: 2,
                name: "Joanna Dark",
                email: "jdark@gmail.com",
                phone: "333-333-333"
            },
            {
                id: 3,
                name: "William Bosh",
                email: "wbosh@gmail.com",
                phone: "333-222-333"
            },
            {
                id: 4,
                name: "Anna High",
                email: "anna.high@gmail.com",
                phone: "333-123-434"
            }],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
