const topplay = document.getElementById('top-play');
const trending = document.getElementById('trending');
const horror = document.getElementById('horror');
const action = document.getElementById('action');
const scifi = document.getElementById('sci-fi');
const apiKey = '7de76c4a00113596dceadece42dafe0f';
const baseUrl = 'https://api.themoviedb.org/3';

async function fetchGenres() {
    const url = `${baseUrl}/genre/movie/list?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //console.log(data);

        return data.genres;
    } catch (error) {
        console.error('There was a problem with fetching genres:', error);
    }
}

// fetching the trending movies
async function homefetch1() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const genres = await fetchGenres();
        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        //console.log(data.results)
        displaytrending(data.results, genreMap);
        const card = data.results[0];
        topplay2(card, genreMap);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// fetching the action movies
async function actionfetch() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&with_genres=28";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const genres = await fetchGenres();
        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        //console.log(data.results)
        actionmovies(data.results, genreMap);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
// fetching the Upcoming movies
async function upcomingfetch() {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=7de76c4a00113596dceadece42dafe0f";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Fetch genres only once
        const genres = await fetchGenres();
        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });

        //console.log(data.results);
        upcomingmovies(data.results, genreMap);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function upcomingmovies(movies, genreMap) {
    const upcoming = document.getElementById('upcoming'); 
    upcoming.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // Map genre IDs to names
        const movieGenres = movie.genre_ids.map(id => genreMap[id]).join(', ');

        card.innerHTML = `
            <img src='https://image.tmdb.org/t/p/original${movie.poster_path}' alt='${movie.title} poster'>
            <h3>${movie.title}</h3>
            <p class="genre">Genres: ${movieGenres}</p>
            <p class="movieid">ID: ${movie.id}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        
        // Add click event to redirect to details page
        card.addEventListener('click', function() {
            window.location.href = `details.html?movieId=${movie.id}`;
        });
        
        upcoming.appendChild(card); // Append card to the upcoming section
    });
}
// fetching the horror movies
async function horrorfetch() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&with_genres=27";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const genres = await fetchGenres();
        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        //console.log(data.results)
        horrormovies(data.results, genreMap);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// fetching scifi movies
async function scififetch() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&with_genres=878";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const genres = await fetchGenres();
        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        //console.log(data.results)
        scifimovies(data.results, genreMap);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// displaying the trending movies
function displaytrending(movies, genreMap) {
    const trending = document.getElementById('trending'); 
    trending.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // Map genre IDs to names
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
        trending.appendChild(card);
    });
}

// displaying the action movies
function actionmovies(movies, genreMap) {
    const action = document.getElementById('action'); 
    action.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // Map genre IDs to names
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
        action.appendChild(card);
    });
}

// displaying the horror movies
function horrormovies(movies, genreMap) {
    const horror = document.getElementById('horror'); 
    horror.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // Map genre IDs to names
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
        horror.appendChild(card);
    });
}

// displaying the sci-fi movies

function scifimovies(movies, genreMap) {
    const scifi = document.getElementById('sci-fi'); 
    scifi.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // Map genre IDs to names
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
        scifi.appendChild(card);
    });
}


function topplay2(movie, genreMap){
    const topplay = document.getElementById('top-play'); 
    if (!topplay) {
        console.error('Element with ID "top-play" not found.');
        return;
    }

    topplay.innerHTML = '';
    
    const topplay1 = document.createElement('div');
    topplay1.className ='toptitle';
    
    // Map genre IDs to names for the top movie
    const movieGenres = movie.genre_ids.map(id => genreMap[id]).join(', ');

    topplay1.innerHTML = `
            <div class='topimage'>
                <img src='https://image.tmdb.org/t/p/original${movie.poster_path}' alt='${movie.title} poster'></div>
                <div class='topdetails'>
                <h1>${movie.title}</h1>
                 <p>${movieGenres}</p>
                <p>Rating: ${movie.vote_average}</p>
                <p>Overview:<br>${movie.overview}</p>
                <p class="movieid">ID: ${movie.id}</p>
                </div>
    `;
    topplay1.addEventListener('click', function() {
            window.location.href = `details.html?movieId=${movie.id}`;
        });
    // Set the background image correctly
    topplay.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`;
    topplay.style.backgroundSize = 'cover';
    topplay.style.backgroundRepeat = 'no-repeat';
    topplay.style.backgroundPosition = 'center';
    
    topplay.appendChild(topplay1);
}

document.addEventListener('DOMContentLoaded', () => {
   homefetch1();
   actionfetch();
   horrorfetch();
   scififetch();
   upcomingfetch();
});