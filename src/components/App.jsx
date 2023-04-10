import { Section } from 'components/Section/Section';
import { PhonebookForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneTitle } from './PhoneTitle/PhoneTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';

import { selectIsLoading, selectError } from 'redux/selectors/selectors';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PhoneTitle />
      <Section title="Add new contacts">
        <PhonebookForm />
      </Section>

      <Section title="Filter contacts">
        <Filter />
      </Section>
      {isLoading && <Spinner />}
      <Section title="Contact List">
        {!error ? (
          <ContactList />
        ) : (
          <h2 style={{ textAlign: 'center' }}>{error}</h2>
        )}
      </Section>
    </>
  );
};
