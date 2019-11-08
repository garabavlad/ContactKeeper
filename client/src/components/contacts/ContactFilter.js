import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const { filterContacts, clearFilter, filtered } = contactContext;

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) text.current.value = '';
	});

	const onChange = () => {
		if (text.current.value !== '') {
			filterContacts(text.current.value);
		}
		else {
			console.log('pac');
			clearFilter();
		}
	};

	return (
		<form>
			<input type='text' ref={text} placeholder='Find A Contact...' onChange={onChange} />
		</form>
	);
};

export default ContactFilter;
