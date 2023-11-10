import axios from 'axios';

export const BuscarTrailerDePeli = async (movieName, apiKey) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        movieName
      )}`
    );

    if (response.data.results.length > 0) {
      const movieId = response.data.results[0].id;
      const trailersResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
      );

      if (trailersResponse.data.results.length > 0) {
        const trailerKey = trailersResponse.data.results[0].key;
        return `https://www.youtube.com/embed/${trailerKey}`;
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching movie trailers:', error);
    return null;
  }
};