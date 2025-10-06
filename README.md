# 🎨 Color Changer

A small interactive web app where you can **generate random HEX colors**, **copy them in one click**, see them as **animated circles**, and **browse recent colors** via a simple history panel.  
Built with **HTML, CSS, and JavaScript**, it showcases a clean UI, smooth visuals, and handy UX details.

---

## 🌟 Features

- 🎯 Valid 6‑digit HEX color generation  
- 🟣 Animated colored circles (keeps up to 5 on screen)  
- 🏷️ Live color label for the current HEX  
- 📋 One‑click copy via Clipboard API  
- 🕘 History of the last 10 colors  
- 🖱️ Apply any color from history with a click

---

## 🧩 How It Works

- **JavaScript** generates a valid HEX using `generateValidHexColor()` and renders a new circle per color.  
- The **circle animation** stacks up to 5 latest colors (oldest are removed).  
- The **current HEX** is displayed in the header and on the color tile.  
- **Clipboard API** copies the visible HEX when you click the color tile.  
- A simple **history panel** stores up to 10 colors; clicking an item reapplies that color with the same animation/update flow.

---

## 🧠 Technologies Used

| Language / Tool | Purpose |
|------------------|---------|
| **HTML** | Page structure and UI elements |
| **CSS** | Styling, layout, and animations |
| **JavaScript** | Color generation, copy, history, and interactions |

---

## 🚀 How to Run

1. Clone or download this repository  
2. Open `index.html` in your browser  
3. Click **New Color** to generate colors, **Copy** to copy HEX, and **History** to toggle recent colors

---

## 🎨 Customization

You can easily change:
- Max circles on screen → edit `maxCircles` in `ChangeColor/changeColor.js`  
- History size → adjust the limit in `History/history.js`  
- Animation/look → tweak styles in `ChangeColor/*.css`, `Color/*.css`, `History/*.css`, and `style.css`  
- Copy feedback → replace `alert` in `Color/copyColor.js` with a toast/snackbar

---

## 🧑‍💻 Author

Saweli Kudasow

---

## 📜 License

This project is free to use for educational purposes.