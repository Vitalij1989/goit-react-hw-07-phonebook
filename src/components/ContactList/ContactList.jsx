import { ImUser, ImBin } from 'react-icons/im';
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
            {contacts.map(({ id, name, phone }) => {
              return (
                <ContactsTableRow key={id}>
                  <ContactsFlexCeil>
                    <ImUser size="20" />
                    {name}
                  </ContactsFlexCeil>
                  <ContactsTableCeil>{phone}</ContactsTableCeil>
                  <ContactsTableCeil>
                    <ListBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <ImBin size="20" />
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
