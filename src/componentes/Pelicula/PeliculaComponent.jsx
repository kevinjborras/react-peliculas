import { useState, useEffect } from 'react';
import { fetchMovieTrailers } from './apiTrailer';
export const apiKey = "364ffcfee962683cb844b361179fb839";

function PeliculaComponent({ peliLista }) {

    const MovieTrailer = ({ movieName, apiKey }) => {
        const [trailerUrl, setTrailerUrl] = useState(null);
        
        useEffect(() => {
          const fetchTrailers = async () => {
            const trailerUrl = await fetchMovieTrailers(movieName, apiKey);
            setTrailerUrl(trailerUrl);
          };
      
          fetchTrailers();
        }, [movieName, apiKey]);
      
        return (
          <div>
            {trailerUrl ? (
              <iframe
                title={`Trailer de: ${movieName}`}
                width="1200"
                height="600"
                src={trailerUrl}
                allowFullScreen
              ></iframe>
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        );
      };
    {/*console.log(peliLista);*/}

    return (
    <div className='bg-yellow-200 flex flex-col p-4'>
        {/* 1.Trama, panel superior 
        <div className="flex bg-white rounded-lg shadow-md p-4 text-center">
            <div className="ml-4">
            <h1 className='text-3xl font-semibold'>{peliLista.Title}</h1>
            <p className='text-xl font-semibold'>Trama (Ingles) </p>
            <p>{peliLista.Plot}</p>
            </div>
        </div>*/}

        <div className="flex">
            {/* Izquierda, info, etc */}
            <div className="w-1/4 bg-white rounded-lg shadow-md p-4 m-4 text-left">
                <img className="mx-auto" src={peliLista.Poster} alt={peliLista.Title} />
                <div className="ml-4">
                    <h1 className='text-lg font-bold'>Titulo: {peliLista.Title}</h1>
                    <p className='font-bold'>Tipo: {peliLista.Type === 'movie' ? 'Pelicula' : peliLista.Type}</p>
                    <span className="font-bold">Genero:</span> {peliLista.Genre}<br />
                    <span className="font-bold">Año:</span> {peliLista.Year}<br />
                    <span className="font-bold">Actores:</span> {peliLista.Actors}<br />
                    <span className="font-bold">Director:</span> {peliLista.Director}<br />
                    <span className="font-bold">Escritores:</span> {peliLista.Writer}<br />
                    <span className="font-bold">Duracion:</span> {peliLista.Runtime}<br />
                    <span className="font-bold">Idioma Original:</span> {peliLista.Language}<br />
                    <span className="text-yellow-500 font-bold">✩Puntuacion Metascore:</span> {peliLista.Metascore}<br />
                </div>
            </div>

            {/* traielr */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 m-4">
            <h1 className='text-2xl font-semibold text-center'>Trailer</h1>
            <MovieTrailer movieName={peliLista.Title} apiKey="364ffcfee962683cb844b361179fb839" />
            <p className='text-lg font-semibold text-center'>Trama:</p>
            <p>{peliLista.Plot}</p>
            </div>
        </div>
    </div>
    )
  }

export default PeliculaComponent