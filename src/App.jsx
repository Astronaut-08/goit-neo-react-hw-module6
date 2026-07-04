import { useState, useMemo, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedContacts, setSavedContacts] = useState(() => {
    const saved = localStorage.getItem('saved-contacts');
    return saved ? JSON.parse(saved) : contacts;
})

  /* ################################################### Блок обробки пошуку ################################################### */
  // Фільтруємо наші контакти 
  const filteredContacts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) return savedContacts;

    return savedContacts.filter(contacts => 
      contacts.name.toLowerCase().includes(query)
    );
  }, [searchQuery, savedContacts])

  /* ################################################### Блок обробки додавання ################################################### */
  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(savedContacts))
  }, [savedContacts])

  const handleAddContact = (newContact) => {
  setSavedContacts((prevContacts) => {
    return [...prevContacts, newContact]
  })
  }

  const handleDeleteContact = (id) => {
    setSavedContacts(prev => prev.filter(contact => contact.id !== id))
  };

  return (
    <>
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onSearch={setSearchQuery}/> 
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
    </div>
    </>
  );
}

export default App;
