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
                case -8: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/8vprhr.html';break;
                case -7: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/7vprhr.html';break;
                case -6: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/6vprhr.html';break;
                case -5: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/5vprhr.html';break;
                case -4: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/4vprhr.html';break;
                case -3: window.location.href = 'C:/8A-24-25-Team4/Daniel_Filipov/3vprhr.html';break; 
                case -2: window.location.href = 'C:/8A-24-25-Team4/Daniel_Rashkov/-2vek.html';break;
                case -1: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/-1vek.html';break;
                case 1: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/1vek.html';break;
                case 2: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/2vek.html';break;
                case 3: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/3vek.html';break;
                case 4: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/4vek.html';break;
                case 5: window.location.href = 'C:/8A-24-25-Team4/Kaloyan_Ganev/5vek.html';break;            
            }
            } else {
                alert('Invalid number. Please enter a number between -8 and 5.');
        }
    }
});