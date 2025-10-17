const maxCircles = 5; 
const circles = [];

// Function to generate valid hex color
function generateValidHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    // Pad with zeros if needed to ensure 6 digits
    return '#' + hex.padStart(6, '0');
}

// Farbe wechseln
function changeColor() {
    // Farbe generieren
    const randomColor = generateValidHexColor();

    // Neues Kreis
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.backgroundColor = randomColor;

    // Position des Kreises
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.transform = "translate(-50%, -50%)";

    // Kreis anzeigen
    document.body.appendChild(circle);
    circles.push(circle);

    // Wird am Ende der Animation ausgeführt
    circle.addEventListener('animationend', () => {
        // Farbe des body auf farbe des kreises setzen
        document.body.style.backgroundColor = randomColor;

        // Kreis löschen
        if (circles.length > 0) {
            const oldCircle = circles.shift();
            if (oldCircle && oldCircle.parentNode) {
                oldCircle.remove();
            }
        }
    });

    // Update both color displays
    document.getElementById('currentColorText').textContent = randomColor;
    document.getElementById('color').textContent = 'Copy';

    // Add to history
    addToHistory(randomColor);
}
