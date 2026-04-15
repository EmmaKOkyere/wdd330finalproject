import { searchMovies } from "./api.js";
import { renderMovies, showLoader } from "./ui.js";

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", async (e) => {
  const query = e.target.value.trim();

  if (query.length < 3) return;

  showLoader();

  const data = await searchMovies(query);

  renderMovies(data.results);
});

const data = await searchMovies(query);
console.log(data);