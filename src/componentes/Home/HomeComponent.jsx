import React from 'react'
import { Link } from "react-router-dom";
import { PELICULA } from '../../routes/path';

function HomeComponent({ peliLista }) {

    console.log(peliLista);

    if (!peliLista || !peliLista.Search) {
        return <div>Cargando...</div>;
    }
    return (
        <div className='p-5 bg-primary-300 grid grid-cols-5 gap-4'>
            {peliLista.Search.length === 0 ? (
                <div>No hay peliculas con ese nombre.</div>
            ) : (
                peliLista.Search.map((movie, index) => (
                    <Link to={`${PELICULA}/${encodeURIComponent(movie.Title)}`} key={index}>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center" key={index}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h1 className='mt-2 text-lg font-semibold'>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                        <p>{movie.Type === 'movie' ? 'Pelicula' : movie.Type}</p>
                    </div>
                    </Link>
                ))
            )}
        </div>
    )
  }

export default HomeComponent