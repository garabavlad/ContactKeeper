import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = (props) => {
	const contactContext = useContext(ContactContext);

	const { _id, name, type, email, phone } = props.contact;

	const { deleteContact, setCurrent, clearCurrent } = contactContext;

	const onClickDelete = () => {
		clearCurrent();
		deleteContact(_id);
	};

	const onClickEdit = () => {
		setCurrent(props.contact);
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-left text-primary'>
				{name}{' '}
				<span
					style={{ float: 'right' }}
					className={'badge ' + (type === 'personal' ? 'badge-primary' : 'badge-success')}>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open' /> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone' /> {phone}
					</li>
				)}
			</ul>
			<p>
				<button className='btn btn-dark btn-sm' onClick={onClickEdit}>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onClickDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact : PropTypes.object.isRequired
};

export default ContactItem;
