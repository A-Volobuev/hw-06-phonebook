import React  from 'react';
import {Box} from '../../contents/Box'
import {FormField, FormItem, FormBtn, FormTitle, FormInput} from '../FormContacts/FormContacts.styled'

import {useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function FormContacts({onSubmit}) {
	const dispatch = useDispatch();

	const contactsSubmit = (e) => {
		e.preventDefault();
		
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContacts(contact));

    form.reset();
	}
	

	return (
		<Box
		border="2px solid #003B46"
		borderRadius="5px"
		width="350px"
		display="flex"
		flexDirection="column"
		alignItems="center"
		bg="#C4DFE6"
		p="40px 0px"
		height="170px"
		>
			<FormTitle>Phonebook</FormTitle>

			<FormField onSubmit={contactsSubmit}>

				<FormItem>
					Name
					<FormInput
					type="text"
					name="name"
					placeholder="Name"
					pattern="[a-zA-Zа-яА-Я]{5,20}"
					title="Содержит только буквы, минимум 5"
					maxLength="30"
					required
					// value={name}
					// onChange={inputNameChange}
					/>
				</FormItem>

				<FormItem>
					Phone number
					<FormInput
					type="tel"
					placeholder="Phone number"
					name="number"
					pattern="\d{7,7}"
					title="Номер телефона состоит из 7 цифр"
					maxLength="7"
					required
					// value={number}
					// onChange={inputNumberChange}
					/>
				</FormItem>

								<FormBtn type="submit">Add contacts</FormBtn>
			</FormField>
		</Box>
	);
}

