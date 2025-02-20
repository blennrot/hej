// Hämta knappen från DOM
const button = document.getElementById('changeColorBtn');

// Lägg till en eventlistener på knappen
button.addEventListener('click', function() {
    // Ändra bakgrundsfärg på body vid knapptryckning
    const colors = ['#f0f0f0', '#f7a1a1', '#a1c9f7', '#d3f7a1', '#f7e5a1'];
    const currentColor = document.body.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    // Kontrollera om den nya färgen är samma som den gamla, om så, välj en annan
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.style.backgroundColor = newColor;
});