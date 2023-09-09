import React, { useState } from 'react';

function NavBar({ onSearch }) {
  const [searchString, setSearchString] = useState('');

  const handleSearch = () => {
    onSearch(searchString); // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pelicula..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar:</button>
    </div>
  );
}

export default NavBar;