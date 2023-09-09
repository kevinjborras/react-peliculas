import React from 'react'

function HomeComponent({ peliLista }) {

    console.log(peliLista);

    if (!peliLista || !peliLista.Search) {
        return <div>No existen peliculas con ese nombre.</div>;
    }
    return (
        <div className='grid grid-cols-6 gap-4'>
            {peliLista.Search.length === 0 ? (
                <div>No existen peliculas con ese nombre.</div>
            ) : (
                peliLista.Search.map((movie, index) => (
                    <div className="bg-white rounded-lg shadow-md p-4 text-center" key={index}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h1 className='mt-2 text-lg font-semibold'>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                        <p>{movie.Type === 'movie' ? 'Pelicula' : movie.Type}</p>
                        {/*```````````````No se viene la trama en el JSON???????? 
                        <h1 className='mt-2'>{movie.Plot}</h1>
                        */}
                    </div>
                ))
            )}
        </div>
    )
  }

export default HomeComponent