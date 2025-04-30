document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', function() {
        handleSearch();
    });
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const input = searchInput.value.trim();
        const number = parseInt(input);
        
        if (!isNaN(number) && number >= -7 && number <= 8) {
            switch(number)
            {
                case -1: window.location.href = '-1vek.html';
            }
            } else {
            console.log('Performing normal search for:', input);
        }
    }
});