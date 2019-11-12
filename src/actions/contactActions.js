import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from "./types";

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    }
};

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
};

export const updateContact = (contact) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
};

export const addContact = (contact) => {
    console.log("adding contact" + contact);
    return {
        type: ADD_CONTACT,
        payload: contact
    }
};

