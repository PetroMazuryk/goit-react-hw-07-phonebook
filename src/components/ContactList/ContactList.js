// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { fetchContacts } from 'redux/operations/operations';

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);

  // const filter = useSelector(state => state.filter);

  // const getFilteredContacts = number => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const contactFilter = getFilteredContacts();
  const contactFilter = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contactFilter.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
