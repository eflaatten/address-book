import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import ContactCard from './ContactCard'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=25")
    .then((res) => {
      const users = res.data.results
      setUsers(users)
    })
  } , [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Address Book</h1>
        <ul className='contact-list'>
          {users.map((user, index) => (
            <ContactCard
            key={index}
            user={user}
            />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
