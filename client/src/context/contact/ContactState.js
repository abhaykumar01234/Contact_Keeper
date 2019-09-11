import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
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

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'professional',
        id: 1,
        name: 'Selena Gomez',
        email: 'selena@gmail.com',
        phone: '555-555-5555'
      },
      {
        type: 'personal',
        id: 2,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '222-222-2222'
      },
      {
        type: 'professional',
        id: 3,
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-1111'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
