//Categorias?
import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom';
import { HOME } from '../../routes/path';

function NavBar({ onSearch }) {
  const [searchString, setSearchString] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search string:', searchString);
    onSearch(searchString); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e);
    }
  };

  return (
<form onSubmit={handleSearch}>
      <div id='searchbar' className='bg-primary-100 py-5 flex justify-center items-center'>
        <Link to={HOME}>
          <img src={logo} alt="" className='w-80 y-30' />
        </Link>
        <input
          type="text"
          placeholder="Pelicula..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={handleKeyDown}
          className='mx-5 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-primary-200 w-full md:w-2/3 lg:w-1/2 xl:w-1/3'
        />
        <button
          type='submit'
          className="px-8 py-2 bg-primary-200 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Buscar
        </button>
        <Link to={HOME}>
          <button
            type='submit'
            className="m-2 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Home
          </button>
        </Link>
      </div>
      <div className='bg-primary-100 py-5 flex justify-center items-center'>
        <p className='text-white bold' style={{ fontWeight: 'bold' }}>EL PLACER DEL ENTRETENIMIENTO</p>
      </div>
    </form>
  );
}

export default NavBar;