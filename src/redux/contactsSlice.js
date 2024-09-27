import {createSlice} from '@reduxjs/toolkit';

const defaultValue = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: defaultValue},
  reducers: {
    addContacts: (state, {payload}) => {
      // Проверяем есть ли уже такой контакт в массиве (contacts)
      if (
        state.contacts.some(
          contact =>
            contact.name.toLocaleLowerCase() ===
            payload.name.toLocaleLowerCase()
        )
      ) { 
        alert(`${payload.name}is already in contacts.}`)
      } else {
        // Сначала пушил, нашел метод, который добавляет не в конец, а в начало
        state.contacts.unshift(payload)
      }
    },
    deleteContact: (state, {payload}) => {
      // Возвращаем новый массив без элемента ид которых совпадают
      state.contacts = state.contacts.filter(contact => contact.id !== payload)
    }

  }
});

// Функции что бы добавить или удалить контакт
export const {addContacts, deleteContact} = contactsSlice.actions;
// Редюсер для стора
export const contactsReducer = contactsSlice.reducer;
// Текущий массив контактов
export const selectContacts = state => state.contacts.contacts;