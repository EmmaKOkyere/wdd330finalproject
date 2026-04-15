import { getMovieDetails } from "./api.js";

const results = document.querySelector("#results");

export function showLoader() {
  results.innerHTML = `<div class="loader"></div>`;
}

export function renderMovies(movies) {
  results.innerHTML = movies.map(movie => `
    <div class="card">
      <img src="${movie.poster_path 
        ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path 
        : 'https://via.placeholder.com/500x750?text=No+Image'}" 
        alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
      <button onclick="getDetails('${movie.title}')">More Info</button>
    </div>
  `).join("");
}

window.getDetails = async function(title) {
  const data = await getMovieDetails(title);

  alert(`
Title: ${data.Title}
Year: ${data.Year}
Genre: ${data.Genre}
Plot: ${data.Plot}
  `);
};