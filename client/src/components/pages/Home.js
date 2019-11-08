import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import ContactContext from '../../context/contact/contactContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);
	const contactContext = useContext(ContactContext);

	const { error, clearErrors } = contactContext;
	const { setAlert } = alertContext;

	useEffect(
		() => {
			authContext.loadUser();
			error && setAlert(error, 'success');
			clearErrors();
		},
		// eslint-disable-next-line
		[ error ]
	);

	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
