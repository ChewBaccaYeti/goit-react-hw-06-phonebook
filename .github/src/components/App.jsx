import { Component } from 'react';
import { Container } from './Layout/Container.styled';
import { GlobalStyle } from './Layout/GlobalStyle';
import { ContactFilter } from './Contacts/ContactFilter/ContactFilter';
import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactList } from './Contacts/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Van DarkHolme', number: '459-12-56' },
      { id: 'id-2', name: 'Johnson Lebovski', number: '443-89-12' },
      { id: 'id-3', name: 'Billy Herrington', number: '645-17-79' },
      { id: 'id-4', name: 'Gena Ciderusni', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    // const contacts = localStorage.getItem('contacts');
    // if (contacts) {
    //   this.setState({ contacts: JSON.parse(contacts) });
    // }

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts && this.setState({ parsedContacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addNewContacts = (newContact, { action }) => {
    const { contacts } = this.state;

    const duplicateName = contacts.map(el => el.name.toLowerCase());

    return duplicateName.includes(newContact.name.toLowerCase())
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => {
          action.resetForm();
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  onDeleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  changeContactFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContacts} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.changeContactFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.onDeleteContacts}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
