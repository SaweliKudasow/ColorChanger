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

    // alte Kreise löschen
    if (circles.length > maxCircles) {
        const oldCircle = circles.shift();
        oldCircle.remove();
    }

    // Update both color displays
    document.getElementById('currentColorText').textContent = randomColor;
    document.getElementById('color').textContent = 'Copy';

    // Add to history
    addToHistory(randomColor);
}
