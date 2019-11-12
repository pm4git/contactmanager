import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from '../actions/types';
import * as uuid from "uuid";

const initialState = {
    contacts: [
        {
            id: uuid(),
            name: "John Wick",
            email: "jw@gmail.com",
            phone: "444-444-444"
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {...state};
        case ADD_CONTACT: {
            action.payload.id = uuid();
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            };

        default:
            return state;
    }
}
