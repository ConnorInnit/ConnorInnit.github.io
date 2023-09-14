document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const suggestions = document.getElementById('suggestions');
    const result = document.getElementById('result');
    const showInfo = document.getElementById('show-info');
    const showImage = document.getElementById('show-image');
    const ratings = document.getElementById('ratings');

    // Dummy data for TV show suggestions (replace with your own data)
    const tvShows = [
        'Game of Thrones',
        'Breaking Bad',
        'Stranger Things',
        'The Mandalorian',
        'The Witcher',
        'Friends',
    ];

    // Event listener for input in the search bar
    searchBar.addEventListener('input', function() {
        const inputValue = searchBar.value.toLowerCase();
        const filteredShows = tvShows.filter(show => show.toLowerCase().includes(inputValue));

        // Clear previous suggestions
        suggestions.innerHTML = '';

        // Display filtered suggestions
        filteredShows.forEach(show => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = show;
            suggestionItem.classList.add('suggestion-item');
            suggestions.appendChild(suggestionItem);

            // Add click event to suggestion items
            suggestionItem.addEventListener('click', function() {
                searchBar.value = show;
                suggestions.style.display = 'none';
                updateShowInfo(show);
            });
        });

        // Show/hide suggestions container
        suggestions.style.display = filteredShows.length > 0 ? 'block' : 'none';
    });

    // Function to update show information
    function updateShowInfo(showName) {
        // Replace with your logic to fetch show data based on the showName
        // For now, we'll use placeholders
        showImage.src = 'example.png';
        showInfo.innerHTML = `
            <h2>${showName}</h2>
            <p>Show description and other information here.</p>
        `;
        ratings.innerHTML = `
            <h3>Ratings</h3>
            <p>IMDb: 8.5/10</p>
            <p>Rotten Tomatoes: 92%</p>
            <!-- Add more ratings as needed -->
        `;
        result.style.display = 'block';
    }

    // Event listener for form submission (Enter key press)
    searchBar.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const selectedShow = searchBar.value;
            updateShowInfo(selectedShow);
            suggestions.style.display = 'none';
            event.preventDefault();
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(event) {
        if (event.target !== searchBar && event.target !== suggestions) {
            suggestions.style.display = 'none';
        }
    });
});