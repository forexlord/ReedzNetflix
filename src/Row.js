import { useState, useEffect } from "react"
import axios from "./axios"
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const base_url = 'https://image.tmdb.org/t/p/original/';

    const[error, setError] = useState('')
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl]);
  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  
    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            // setTrailerUrl();
            setTrailerUrl((urlParams.get('v')))
          })
          .catch((err) => setError(err));
      }
    };

    function truncate( str, n){
      return str?.length>n ? str.substr(0, n-1) + "...":str;
    }


    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)} // pass a function reference
              className={`row-poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    );
  };
  
  export default Row;
  