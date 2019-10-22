import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
      {/* <Contact 
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Joshua Ortiz"
        online= {false}
      />
    
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/18.jpg"
        name="Corey Burns"
        online= {true}
      />

      <Contact 
        avatar="https://randomuser.me/api/portraits/women/84.jpg"
        name="Lydia Griffin"
        online= {true}
      /> */}
    
      <ContactList/>
    </div>

  );
}

export default App;
