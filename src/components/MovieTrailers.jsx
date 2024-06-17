import { useState } from 'react';

const TMDB_API_KEY = 'a50705bc1d965eab7f5fa2df02caaf8b';

const MovieTrailer = ({ imdbId }) => {
  // console.log(imdbId);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [error, setError] = useState('');

  const fetchTrailer = async () => {
    try {
      // Fetch the TMDB ID using the IMDb ID
      const tmdbIdResponse = await fetch(`https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id&api_key=${TMDB_API_KEY}`);
      const tmdbIdData = await tmdbIdResponse.json();

      if (tmdbIdData.movie_results.length === 0) {
        throw new Error('Trailer not found.');
      }

      const tmdbId = tmdbIdData.movie_results[0].id;

      // Fetch the movie trailers using the TMDB ID
      const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${TMDB_API_KEY}`);
      const trailerData = await trailerResponse.json();
      console.log(trailerData);
      const youtubeTrailer = trailerData.results.find(video => video.site === 'YouTube' && (video.name.includes('Official Trailer') || video.name.includes('Trailer')));
      console.log(youtubeTrailer);
      if (!youtubeTrailer) {
        throw new Error('Trailer not found.');
      }

      const trailerUrl = `https://www.youtube.com/watch?v=${youtubeTrailer.key}`;
  
      // Open the trailer URL in a new tab/window
      window.open(trailerUrl, '_blank');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <br></br>
      <button onClick={fetchTrailer} className="button-trailer">
        <span>Play Trailer</span>
      </button>
      {trailerUrl && <div><a href={trailerUrl} target="_blank" rel="noopener noreferrer">Watch Trailer</a></div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default MovieTrailer;