# Guess My Number! 🎯

A retro-styled number guessing game built with HTML, CSS, and vanilla JavaScript.

**▶️ Play it live:** [salrocks.github.io/guess-my-number](https://salrocks.github.io/guess-my-number/)

---

## How to Play

1. The game picks a secret number between **1 and 20**.
2. Type your guess in the box and click **Check!**
3. You'll get a hint after each guess: **Too High 📈** or **Too Low 📉**.
4. Every wrong guess costs you 1 point. You start with **20**.
5. Guess the number to win. The screen turns green and your score is saved as a **highscore** if it beats your previous best.
6. Run out of points and you lose. Click **Again!** to start a new round at any time.

## Features

- Random secret number generated each round
- Live hints and score updates
- Highscore that carries over between rounds
- Input check for empty guesses
- One-click reset with **Again!**
- Pixel-art look using the *Press Start 2P* font

## Built With

- **HTML** for page structure
- **CSS** for styling and layout (Flexbox)
- **JavaScript** for game logic and DOM manipulation

## Concepts Practiced

- Selecting and updating elements with `querySelector` and `textContent`
- Handling clicks with `addEventListener`
- Managing game state with variables (secret number, score, highscore)
- Conditional logic with `if / else if / else`
- The ternary operator for choosing hint messages
- Changing styles dynamically from JavaScript
- Generating random numbers with `Math.random()` and `Math.trunc()`

## Project Structure

```
guess-my-number/
├── index.html   # Page layout
├── style.css    # Styling
└── script.js    # Game logic
```

## Run It Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Salrocks/guess-my-number.git
   ```
2. Open `index.html` in your browser. No installs or build steps needed.
