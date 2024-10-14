const apiKey = '7de76c4a00113596dceadece42dafe0f';
const baseUrl = 'https://api.themoviedb.org/3';

const searchresults = document.getElementById("search-results");
const genrestest = document.getElementById('genres-test');
const genretest1 = document.getElementById("genretest");

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

async function searchmovies1(id) {
    let allResults = [];
    for (let page = 1; page <= 5; page++) {
        const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            allResults = allResults.concat(data.results);
            if (data.page >= data.total_pages) {
                break;
            }
        } catch (error) {
            console.error(`There was a problem with the fetch operation on page ${page}:`, error);
        }
    }
    if (allResults.length == 0) {
        searchresults.innerHTML = "No results found.";
    }
    const genres = await fetchGenres();
    const genreMap = {};
    genres.forEach(genre => {
        genreMap[genre.id] = genre.name;
    });
    searchmovies(allResults, genreMap);
}

function searchmovies(movies, genreMap) {
    searchresults.innerHTML = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        const movieGenres = movie.genre_ids.map(id => genreMap[id]).slice(0, 2).join(', ');
        genretest1.style.display='block';
        genretest1.innerHTML = `The results for genre "${movieGenres}"`;
        const posterPath = movie.poster_path ? 
            `https://image.tmdb.org/t/p/original${movie.poster_path}` : 
            'image1.jpg';

        card.innerHTML = `
            <img src='${posterPath}' alt='${movie.title} poster'>
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
