# Stopwatch

⏱️ Stopwatch Web App

A simple and interactive Stopwatch built with HTML, CSS, and JavaScript.
Features lap tracking, start/stop/reset, and a dark mode toggle for a modern look.

🌟 Features

✅ Start, Stop, Reset functionality

✅ Lap recording (latest laps appear on top)

✅ Millisecond precision (00:00.00)

✅ Dark mode / Light mode toggle

✅ Responsive design

✅ Fully interactive buttons and keyboard-friendly

🛠️ Technologies Used

HTML5 – Structure of the stopwatch

CSS3 – Styling, grid layout, dark/light themes

JavaScript (ES6) – Stopwatch logic and lap tracking

📂 Project Structure
stopwatch-app/
│
├── index.html        # Main HTML file
├── style.css         # Styling & dark mode
├── script.js         # Stopwatch functionality
└── README.md         # Documentation

🚀 How to Run the Project

Clone the repository

git clone https://github.com/your-username/stopwatch-app.git


Open the project folder

Open index.html in your browser

No server required

Works instantly offline

⌨️ How to Use

Start – Begin timing

Lap – Record a lap (button disabled until started)

Stop – Pause timing

Reset – Reset timer and clear all laps

Dark Mode Toggle – Switch between dark/light themes

🧠 How It Works

Stopwatch uses Date.now() to calculate elapsed time

setInterval updates the display every 10ms

Laps are prepended to a list for easy viewing

Dark mode is toggled by adding/removing a dark-mode class on the body

🎨 UI Design

Centered stopwatch with clean and modern layout

Millisecond-precise digital display

Color-coded buttons with hover effects

Dark mode for comfortable nighttime usage

⚠️ Notes

This is a frontend-only app; no backend required

Timer works offline and requires no API

Designed for learning, portfolios, or personal projects

📄 License

This project is open-source and free to use for educational and personal projects
