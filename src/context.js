import React, {Component} from 'react';

const Context = React.createContext();

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
            }]
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
