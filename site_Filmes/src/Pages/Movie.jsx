import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../Components/MovieCard"

import './Movie.css'

const apiKey = import.meta.env.VITE_API_KEY

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

function Movie() {

    const formatCurrency = (number) => {
        return number.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      };

    const {id} = useParams()
    const [movie, setMovie]= useState(null)
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(err => console.error(err));

                // Busca os vídeos associados ao filme para encontrar o trailer
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`, options)
        .then(response => response.json())
        .then(data => {
            // Procura pelo vídeo do tipo 'Trailer'
            const trailer = data.results.find(video => video.type === 'Trailer');
            if (trailer) {
                setTrailerKey(trailer.key); // Armazena a chave do trailer no estado
            }
         })
        .catch(err => console.error(err));

      }, [id])

    return ( 
        <div className="movie-page">
        {movie && <>
            <MovieCard movie={movie} showLink = {false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>Orçamento:</h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>

            <div className="info">
                <h3>Bilheteria:</h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
                <h3>Duração:</h3>
                <p>{movie.runtime} minutos</p>

            </div>

            <div className="description">
                <h3>Descrição:</h3>
                <p>{movie.overview}</p>
            </div>

            {trailerKey && (
                    <div className="trailer">
                        <h3>Trailer</h3>
                        <iframe
                            width="800"
                            height="600"
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                )}
        </>}
    </div>
     );
}

export default Movie;