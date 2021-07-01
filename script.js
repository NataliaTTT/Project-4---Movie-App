"use strict";
const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&#39";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const movies = document.getElementById("movies");
//btn.addEventListener("search", searchMovies);
showMovies(apiUrl);
async function showMovies(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  const moviesRes = await response.json();
  console.log(moviesRes);

  moviesRes.results.forEach((i) => {
    const movie = `
    <div class="col mt-5">
      <div class="card  h-100" >
              <img src="${
                IMGPATH + i.poster_path
              }" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${i.title}</h5>
                  <p class="card-text">${i.overview}</p>
                  </div>
                  <div class="card-footer">
                    <p class="card-text"><small class="text-muted">Release date: ${
                      i.id === 385687
                        ? (i.release_date = "2022-04-02")
                        : i.release_date
                    }</small></p>
                   
                   </div> 
              </div>
      </div>
    </div>`;
    console.log(movie);

    movies.insertAdjacentHTML("afterbegin", movie);
  });
}

const searchButton = document.getElementById("btn");
const searchInput = document.getElementById("input");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  movies.innerHTML = "";

  let inputValue = searchInput.value;
  if (inputValue) {
    const search = showMovies(SEARCHAPI + inputValue);
    inputValue = "";
  }
});
