---

# Movie Website

A movie website that allows users to search for movies, browse by genre, and view movie details.

## Overview

This is a movie website that enables users to:

- Search for movies by title.
- Browse movies by genre (e.g., action, horror, sci-fi).
- View detailed movie information including title, genres, rating, and poster image.
- View the top trending movie on the homepage.
- See upcoming movie releases.
- Select a genre to display movies of that genre.

The website leverages The Movie Database API to fetch real-time movie data.

## Features

- **Search for Movies:** Search by movie title.
- **Browse by Genre:** Filter movies by specific genres.
- **View Movie Details:** Detailed movie information including ratings, genres, and poster.
- **Trending and Upcoming Movies:** View trending and upcoming releases.

## API Key

To run this project, you will need an API key from [The Movie Database](https://www.themoviedb.org/). Replace the `apiKey` variable in the code with your own key.

## Usage

1. Open the `index.html` file in a web browser.
2. The page will load and display movie data.
3. Use the navigation menu to search for movies or browse by genre.
4. Click on a movie card to view more details.

## Dependencies

- The Movie Database API (https://www.themoviedb.org/)
- Font Awesome 6.6.0 for icons

## Notes

- Basic knowledge of HTML, CSS, and JavaScript is required.
- You may need to adjust the code to fit your use case.
- Minimal error handling is implemented; consider adding more to handle edge cases.

## Files

- `index.html`: The main HTML file for the website.
- `style.css`: The stylesheet for the website.
- `script.js`: The JavaScript file for the website.
- `search.js`: Handles search functionality.
- `genre.js`: Handles genre filtering functionality.
- `details.html`: The movie details page.
- `logo1.png`: The website logo.

## Functions

### `script.js`
- `fetchGenres()`: Fetches the list of genres from the API.
- `homefetch1()`: Fetches and displays trending movies.
- `actionfetch()`: Fetches and displays action movies.
- `horrorfetch()`: Fetches and displays horror movies.
- `scififetch()`: Fetches and displays sci-fi movies.
- `upcomingfetch()`: Fetches and displays upcoming movies.
- `displaytrending()`: Displays trending movies.
- `actionmovies()`: Displays action movies.
- `horrormovies()`: Displays horror movies.
- `scifimovies()`: Displays sci-fi movies.
- `upcomingmovies()`: Displays upcoming movies.
- `topplay2()`: Displays the top trending movie.

### `search.js`
- `searchmovies1()`: Fetches search results based on user input.
- `fetchGenres()`: Fetches genres from the API.
- `searchmovies()`: Displays search results.

### `genre.js`
- `searchmovies1()`: Fetches movies of a specific genre.
- `fetchGenres()`: Fetches the list of genres from the API.
- `searchmovies()`: Displays genre-specific movies.

## Actions

- Clicking a movie card opens the movie details page.
- Clicking a genre button displays movies from that genre.
- Searching for a movie displays the search results.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributing

Contributions are welcome! To contribute, please fork the repository and submit a pull request.

## Acknowledgments

This project uses the [Movie Database API](https://www.themoviedb.org/), a free service with usage limits. Please check the API documentation for more details.

--- 

This format follows GitHub's basic writing and formatting syntax and is ready for use.
