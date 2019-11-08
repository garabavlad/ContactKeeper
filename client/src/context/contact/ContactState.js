import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts : [
			{
				id    : 1,
				name  : 'Dorean Goffen',
				email : '123@gmail.ff',
				phone : '112-344-555',
				type  : 'professional'
			},
			{
				id    : 2,
				name  : 'Tudor Goffen',
				email : '990@gmail.ff',
				phone : '112-344-556',
				type  : 'professional'
			},
			{
				id    : 3,
				name  : 'Derex Folltren',
				email : 'derexFoll@gmail.ff',
				phone : '447-349-928',
				type  : 'personal'
			}
		],
		current  : null,
		filtered : null
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	//ADD CONTACT
	const addContact = (contact) => {
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//DELETE CONTACT
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	//SET CURRENT CONTACT
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//CLEAR CURRENT CONTACT
	const clearCurrent = (contact) => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//UPDATE CONTACT
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	//FILTER CONTACTS
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	//CLEAR FILTER
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<contactContext.Provider
			value={{
				contacts       : state.contacts,
				current        : state.current,
				filtered       : state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}}>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
