import React from 'react'
import NavBar from '../componentes/NavBar/NavBar';
import Footer from '../componentes/Footer/Footer';
import PeliculaComponent from '../componentes/Pelicula/peliculaComponent';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export const API_KEY = "d7440481";

function Peliculas() {
    const navigate = useNavigate();
    const { movieName: urlMovieName } = useParams();
    const [searchQuery, updateSearchQuery] = useState(urlMovieName || 'Iron Man');
    const [peliLista, updatePeliLista] = useState([]);
    const [timeoutId, updateTimeoutId] = useState(); 

    useEffect(() => {

        const fetchData = async (movieName) => {
          try {
            const responsePosts = await axios.get(
              `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}&plot=full`
            );
            updatePeliLista(responsePosts.data);
            console.log("Peliculas obtenidas!", responsePosts.data)
          } catch (error) {
            console.error("Error al obtener pelicula:", error);
          }
        };

         if (searchQuery) {
            if (timeoutId) {
             clearTimeout(timeoutId);
            }
        
            const newTimeoutId = setTimeout(() => {
             fetchData(searchQuery);
            }, 500);
        
             updateTimeoutId(newTimeoutId);
        }
        }, [searchQuery]);

    return (
        <div className="min-h-screen">
            <NavBar onSearch={updateSearchQuery} />
            {peliLista && <PeliculaComponent peliLista={peliLista}/>}
            <Footer/>
        </div>
      );
}

export default Peliculas