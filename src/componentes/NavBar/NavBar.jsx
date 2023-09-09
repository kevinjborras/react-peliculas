//No se porque llame a esto Navbar
import React, { useState } from 'react';

function NavBar({ onSearch }) {
  const [searchString, setSearchString] = useState('');

  const handleSearch = () => {
    onSearch(searchString); 
  };

  return (
    <div id='searchbar' className='flex justify-center items-center py-5'>
      <div className='flex items-center space-x-4'>
        <input className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
          type="text"
          placeholder="Pelicula..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"  onClick={handleSearch}>Buscar:</button>
      </div>
    </div>
  );
}

export default NavBar;