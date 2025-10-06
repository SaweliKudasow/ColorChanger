// Store color history
let colorHistory = [];

// Function to add color to history
function addToHistory(color) {
    colorHistory.push(color);
    if (colorHistory.length > 10) { // Keep only last 10 colors
        colorHistory.shift();
    }
}

// Function to show/hide history
function toggleHistory() {
    const historyContainer = document.getElementById('historyContainer');
    
    if (!historyContainer) {
        showHistory();
    } else if (historyContainer.style.display === 'none') {
        showHistory();
    } else {
        hideHistory();
    }
}

// Function to apply color from history
function applyColorFromHistory(color) {
    // Create new circle with selected color
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.backgroundColor = color;

    // Position the circle
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.transform = "translate(-50%, -50%)";

    // Show circle
    document.body.appendChild(circle);
    circles.push(circle);

    // Remove old circles
    if (circles.length > maxCircles) {
        const oldCircle = circles.shift();
        oldCircle.remove();
    }

    // Update color displays
    document.getElementById('currentColorText').textContent = color;
    document.getElementById('color').textContent = 'Copy';

    // Hide history
    hideHistory();
}

// Function to show history
function showHistory() {
    let historyContainer = document.getElementById('historyContainer');
    
    if (!historyContainer) {
        historyContainer = document.createElement('div');
        historyContainer.id = 'historyContainer';
        historyContainer.className = 'history-container';
        document.body.appendChild(historyContainer);
    }

    historyContainer.innerHTML = '';
    historyContainer.style.display = 'block';

    if (colorHistory.length === 0) {
        const noHistory = document.createElement('div');
        noHistory.textContent = 'History is empty';
        noHistory.style.textAlign = 'center';
        noHistory.style.padding = '20px';
        historyContainer.appendChild(noHistory);
        return;
    }

    // Create history items
    colorHistory.forEach((color, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.style.backgroundColor = color;
        
        const colorText = document.createElement('span');
        colorText.textContent = color;
        
        historyItem.appendChild(colorText);
        
        // Add click event to apply color
        historyItem.addEventListener('click', () => applyColorFromHistory(color));
        
        historyContainer.appendChild(historyItem);
    });
}

// Function to hide history
function hideHistory() {
    const historyContainer = document.getElementById('historyContainer');
    if (historyContainer) {
        historyContainer.style.display = 'none';
    }
}

// Export functions
window.addToHistory = addToHistory;
window.toggleHistory = toggleHistory; 
