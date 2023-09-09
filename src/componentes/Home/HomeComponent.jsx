import React from 'react'

function HomeComponent({ peliLista }) {

    if (!peliLista || !peliLista.Search) {
        return <div>No existen peliculas con ese nombre.</div>;
    }
    return (
        <div>
            {peliLista.Search.length === 0 ? (
                <div>No existen peliculas con ese nombre.</div>
            ) : (
                peliLista.Search.map((movie, index) => (
                    <div className="bg-white rounded-lg shadow-md p-4" key={index}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h1>{movie.Title}</h1>
                        <h1>{movie.Plot}</h1>
                    </div>
                ))
            )}
        </div>
    )
  }

export default HomeComponent