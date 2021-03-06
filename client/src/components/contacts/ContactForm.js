import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, updateContact, current, clearCurrent } = contactContext;

	useEffect(
		() => {
			if (current !== null) {
				setContact(current);
			}
			else {
				setContact({
					name  : '',
					email : '',
					phone : '',
					type  : 'personal'
				});
			}
		},
		[ contactContext, current ]
	);

	const [ contact, setContact ] = useState({
		name  : '',
		email : '',
		phone : '',
		type  : 'personal'
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current !== null) {
			updateContact(contact);
			clearCurrent();
		}
		else {
			addContact(contact);
		}
	};

	const onClickClear = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
			<input type='text' name='name' required placeholder='Name' value={name} onChange={onChange} />
			<input type='email' name='email' required placeholder='Email' value={email} onChange={onChange} />
			<input type='text' name='phone' required placeholder='Phone' value={phone} onChange={onChange} />
			<h5>Contact Type</h5>
			<input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange} />{' '}
			Personal {' '}
			<input
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			Professional
			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button onClick={onClickClear} className='btn btn-light btn-block'>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
