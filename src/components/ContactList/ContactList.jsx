// import PropTypes from 'prop-types';
import { IoIosTrash, IoLogoReddit } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

import {
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <ContactsTable>
        <thead>
          <tr>
            <ContactsTableHead>Name</ContactsTableHead>
            <ContactsTableHead>Phone number</ContactsTableHead>
            <ContactsTableHead>Contacts ({contacts.length})</ContactsTableHead>
          </tr>
        </thead>

        <tbody>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactsTableRow key={id}>
                <ContactsFlexCeil>
                  {' '}
                  <IoLogoReddit size="20" />
                  {name}
                </ContactsFlexCeil>
                <ContactsTableCeil>{number}</ContactsTableCeil>
                <ContactsTableCeil>
                  <ListBtn
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <IoIosTrash size="20" />
                  </ListBtn>
                </ContactsTableCeil>
              </ContactsTableRow>
            );
          })}
        </tbody>
      </ContactsTable>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onRemove: PropTypes.func.isRequired,
// };
