import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from "./types";
import Axios from "axios";

export const getContacts = () => async dispatch => {

    const resp = await Axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: resp.data

    });
};

export const getContact = (id) => async dispatch => {

    const resp = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: resp.data
    });
};

export const deleteContact = (id) => async dispatch => {
    try {
        await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch (e) {
        console.error(e);
    }
};

export const updateContact = (contact) => async dispatch => {
    const resp = await Axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
    dispatch({
        type: UPDATE_CONTACT,
        payload: resp.data
    });
};

export const addContact = (contact) => async dispatch => {
    const resp = await Axios.post("https://jsonplaceholder.typicode.com/users", contact);
    dispatch({
        type: ADD_CONTACT,
        payload: resp.data
    });
};

