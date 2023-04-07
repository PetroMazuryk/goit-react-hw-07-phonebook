import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const getFilteredContacts = number => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactFilter = getFilteredContacts();

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
