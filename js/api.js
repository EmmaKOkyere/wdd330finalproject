const TMDB_KEY = "YOUR_TMDB_KEY";
const OMDB_KEY = "YOUR_OMDB_KEY";

// Search movies from TMDB
export async function searchMovies(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}`
  );
  return await res.json();
}

// Get extra details from OMDb (2nd API)
export async function getMovieDetails(title) {
  const res = await fetch(
    `https://www.omdbapi.com/?t=${title}&apikey=${OMDB_KEY}`
  );
  return await res.json();
}