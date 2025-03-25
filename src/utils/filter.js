/**
 * Filter the movie list - keep only those which contain the search input
 *
 * @param {array} (movies=[]) All movies
 * @param {string} (searchInput='') User input on search bar
 * @returns {array} - filtered array
 */

const filterMovie = (movies = [], searchInput = '') => {
    let filtered = [...movies].filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filtered;
};

export default filterMovie;
