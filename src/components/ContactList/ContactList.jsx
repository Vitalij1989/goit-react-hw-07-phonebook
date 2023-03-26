import { IoIosTrash, IoLogoReddit } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getFilteredContacts, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import {
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
  Loading,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {!isLoading && !error ? (
        <ContactsTable>
          <thead>
            <tr>
              <ContactsTableHead>Name</ContactsTableHead>
              <ContactsTableHead>Phone number</ContactsTableHead>
              <ContactsTableHead>
                Contacts ({contacts.length})
              </ContactsTableHead>
            </tr>
          </thead>

          <tbody>
            {contacts.map(({ id, name, number }) => {
              return (
                <ContactsTableRow key={id}>
                  <ContactsFlexCeil>
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
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};
