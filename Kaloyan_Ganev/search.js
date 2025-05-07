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
        
        if (!isNaN(number) && number >= -8 && number <= 5) {
            switch(number)
            {
                case -1: window.location.href = '-1vek.html';break;
                case 1: window.location.href = '1vek.html';break;
                case 2: window.location.href = '2vek.html';break;
                case 3: window.location.href = '3vek.html';break;
                case 4: window.location.href = '4vek.html';break;
                case 5: window.location.href = '5vek.html';break;
            }
            } else {
                alert('Invalid number. Please enter a number between -8 and 5.');
        }
    }
});