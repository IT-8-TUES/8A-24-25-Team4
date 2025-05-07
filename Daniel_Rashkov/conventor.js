document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('convert-button');
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    
    button.addEventListener('click', function() {
        const number = parseInt(input.value, 10); 
        output.value = arabicToRoman(number);
    });

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const number = parseInt(input.value, 10);
            output.value = arabicToRoman(number);
        }
    });

    function arabicToRoman(number) {
        let roman = "";
        const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
        let a;
        if (number < 1 || number > 3999)
            return "Enter a number between 1 and 3999";
        else {
            if (isNaN(number)) {
                return "Enter a number between 1 and 3999";
            }
            for (let key in romanNumList) {
                a = Math.floor(number / romanNumList[key]);
                if (a >= 0) {
                    for (let i = 0; i < a; i++) {
                        roman += key;
                    }
                }
                number = number % romanNumList[key];
            }
        }
        return roman;
    }
});