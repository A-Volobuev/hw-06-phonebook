import React from 'react';

import {Box} from '../contents/Box';
import FormContacts from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {ListTitle} from './App.styled';

import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice'



export default function App() {
  const contacts = useSelector(selectContacts);
  
  return (
    <Box
    bg="#66A5AD"
    p="20px 20px 480px 20px"
    display="flex"
    justifyContent="space-evenly"
    >
      <FormContacts />

      <Box
      border="2px solid #003B46"
      borderRadius="5px"
      width="350px"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      bg="#C4DFE6"
      >
        <ListTitle>Contacts</ListTitle>

        <Filter/>

        <ListContacts contacts={contacts}/>

      </Box>
    </Box>
  );
}




