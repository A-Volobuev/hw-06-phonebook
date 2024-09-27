import React from 'react';
import {Box} from '../../contents/Box';
import { List, ListItem, DeleteBtn} from './ListContacts.styled';

import { deleteContact } from '../../redux/contactsSlice';
import {useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';

export const ListContacts = ({contacts}) => {
	const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
	// console.log(contacts);

	const visibleContacts = contacts.filter(({ name }) =>
	name.toLowerCase().includes(filter)
	);

	return(
		<Box>
			<List>
          {visibleContacts.map(({id, name, number}) => (
						<ListItem key={id}>
							<span>{name} : {number}</span>
						<DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
						</ListItem>
					))}
					{visibleContacts.length === 0 && <span> Not Find, try another name</span>}
      </List>
		</Box>
	)
}
