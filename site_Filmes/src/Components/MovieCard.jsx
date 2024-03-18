import { Link } from "react-router-dom";

const imageurl = import.meta.env.VITE_IMG
function MovieCard({movie, showLink = true}) {
    return ( 
        <div className='movie-card'>
        <img src={imageurl + movie.poster_path} alt="{movie.title}" />
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
     );
}

export default MovieCard;