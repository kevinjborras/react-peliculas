import React from 'react'
import HomeComponent from '../componentes/home/homeComponent'
import NavBar from '../componentes/navbar/navbar';
import Footer from '../componentes/Footer/Footer';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const API_KEY = "d7440481";

{/*HACER EL REQUEST AL API DIRECTAMENTE AQUI!! PASAR PROPS A HOME COMP*/}

function Home() {
    const [searchQuery, updateSearchQuery] = useState('Iron Man');
    const [peliLista, updatePeliLista] = useState([]);
    const [timeoutId, updateTimeoutId] = useState(); 

      useEffect(() => {

        const fetchData = async (searchString) => {
          try {
            const responsePosts = await axios.get(
              `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}&plot`
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
    <div>
        <NavBar onSearch={updateSearchQuery} />
        {peliLista && <HomeComponent peliLista={peliLista}/>}
        <Footer/>
    </div>
  )
}

export default Home