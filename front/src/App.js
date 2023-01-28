import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'

function App () {
  const [ characters, setCharacters ] = useState ([])

  const onSearch = (character) => {    
      fetch(`http://localhost:3001/rickandmorty/character/${character}`) // ${character} nos trae el valor que el usuario pone en la search bar (id)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   }

   const onClose = (id) => {
    setCharacters([
      characters.filter(character => character.id !== id)
    ])

   }

 
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}>

      </Nav>
      <div>
        <Cards
          onClose={onClose}
          characters={characters}
        />      
      </div>
    </div>
  )
}

export default App;
