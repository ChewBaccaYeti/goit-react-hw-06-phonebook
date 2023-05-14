import { GlobalStyle } from './Layout/GlobalStyle';
import { Container } from './Layout/Container.styled';
import { ContactFilter } from './Contacts/ContactFilter/ContactFilter';
import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactList } from './Contacts/ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
