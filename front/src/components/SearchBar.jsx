import { useState } from "react";

function SearchBar({onSeach}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
      <button onClick={() => onSeach(character)}>Agregar</button>
      </div>
   );
}
 
export default SearchBar;

// A onSearch dentro de button la paso como callback para poderle pasar parámetros sin que se ejecute automáticamente