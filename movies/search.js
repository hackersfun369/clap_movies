const apiKey = '7de76c4a00113596dceadece42dafe0f';
const baseUrl = 'https://api.themoviedb.org/3';

const searchInput = document.querySelector('.search');
const searchresults = document.getElementById("search-results1");
const genrestest = document.getElementById('genres-test');

async function fetchGenres() {
    const url = `${baseUrl}/genre/movie/list?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('There was a problem with fetching genres:', error);
    }
}
async function searchmovies1(searchterm) {
    let allResults = [];
    const genres = await fetchGenres();
    const genreMap = {};

    genres.forEach(genre => {
        genreMap[genre.id] = genre.name;
    });
    for (let page = 1; page <= 5; page++) {
        const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchterm)}&page=${page}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            if (data.results.length === 0) {
                break;
            }
            
            allResults = allResults.concat(data.results);
            if (data.page >= data.total_pages) {
                break;
            }
        } catch (error) {
            console.error(`There was a problem with the fetch operation on page ${page}:`, error);
            break;
        }
    }

    if (allResults.length === 0) {
        searchresults.innerHTML = "No results found.";
    } else {
        searchmovies(allResults, genreMap);
    }
}

function searchmovies(movies, genreMap) {
    searchresults.innerHTML = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        const movieGenres = movie.genre_ids.map(id => genreMap[id]).join(', ');

        card.innerHTML = `
            <img src='https://image.tmdb.org/t/p/original${movie.poster_path}' alt='${movie.title} poster'>
            <h3>${movie.title}</h3>
            <p class="genre">Genres: ${movieGenres}</p>
            <p class="movieid">ID: ${movie.id}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        card.addEventListener('click', function() {
            window.location.href = `details.html?movieId=${movie.id}`;
        });

        searchresults.appendChild(card);
    });
}

let debounceTimeout;
const texth1 = document.getElementById("texth1");
searchInput.addEventListener("input", function() {
    const query = this.value.trim();
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        if (query.length > 0) {
            searchmovies1(query);
            texth1.innerHTML = `Results for your search "${query}"`;
        } else {
            searchresults.innerHTML = '';
        }
    }, 300);
});