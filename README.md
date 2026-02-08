# LED Digits & Scrolling Clock

This project is a JavaScript-based simulation of digital displays, featuring both a classic 7-segment LED style and a modern scrolling digit effect. It is designed to demonstrate DOM manipulation, CSS styling for complex UI components, and time-based logic.

## Features

- **7-Segment LED Display**: A realistic implementation of digital numbers using HTML/CSS segments.
- **Scrolling Digits**: A smooth vertical scrolling animation for changing numbers.
- **Digital Clock**: Displays the current time (HH:MM:SS) using the custom digit components.
- **Interactive Controls**: Buttons to switch between LED mode, Scrolling mode, and to toggle individual segments for testing.

## How it works

The project uses vanilla JavaScript to manipulate the DOM.

- `LedDigit.js` defines the class responsible for rendering and updating the 7-segment digits.
- `led.js` handles the main application logic, including the clock interval and view switching.
- `styles.css` provides the visual styling for the "lit" and "unlit" segments, as well as the scrolling animations.
