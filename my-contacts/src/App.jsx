import { useEffect, useState } from 'react'
import './App.css'
import Contact from './Contact'
import SearchFilter from './AddContact'
import AddContact from './AddContact'

const INITIAL_CONTACTS = [
  {
    id: 1, 
    name: 'Joby', 
    email: 'norniz2@g.co', 
    phone: '434-219-9659',
    address: '9th Floor'
  },
  {
    id: 2, 
    name: 'Vinnie', 
    email: 'vcestard6@theglobeandmail.com', 
    phone: '60-931-2019',
    address: '5th Floor'
  }
]

function App() {
  const [isAddContact, setIsAddContact] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [contacts, setContacts] = useState(INITIAL_CONTACTS)

  const handleSearch = (event) => {
    // if (event.target.value !== '') {
      setSearchQuery(event.target.value)
    // }
  }

  const handleAddContact = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
}

  useEffect(() => {
    setContacts(INITIAL_CONTACTS.filter(contact => contact.name.includes(searchQuery)))
  }, [searchQuery])

  return (
    <div className="App">
      {isAddContact ? <AddContact handleSubmit={handleSubmit} cancel={() => setIsAddContact(false)} /> :
        <section>
          <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search by name"/>
          <button onClick={() => setIsAddContact(true)}>Add Contact</button>
          <Contact contacts={contacts} />
        </section>
      }
    </div>
  )
}

export default App
