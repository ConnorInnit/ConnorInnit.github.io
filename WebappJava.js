document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const result = document.getElementById('result');
    const showImage = document.getElementById('show-image');
    const showInfo = document.getElementById('show-info');
    const ratings = document.getElementById('ratings');
    const tvShows = [
        'Game of Thrones',
        'Breaking Bad',
        'Stranger Things',
        'The Mandalorian',
        'The Witcher',
        'Friends',
    ];

    searchBar.addEventListener('input', function() {
        const inputValue = searchBar.value.trim(); // Remove leading/trailing spaces

        // Check if the input matches any TV show exactly
        const matchedShow = tvShows.find(show => show.toLowerCase() === inputValue.toLowerCase());

        if (matchedShow) {
            updateShowInfo(matchedShow);
        } else {
            result.style.display = 'none'; // Hide result if not found
        }
    });

    function updateShowInfo(showName) {
        showImage.src = 'example.png';
        showInfo.innerHTML = `
            <h2>${showName}</h2>
            <p>Show description and other information here.</p>
        `;
        ratings.innerHTML = `
            <h3>Ratings</h3>
            <p>IMDb: 8.5/10</p>
            <p>Rotten Tomatoes: 92%</p>
        `;
        result.style.display = 'block';}
    }
)