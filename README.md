# Entertainment Hub

Entertainment Hub is an interactive website that displays movies, books, and music in a clean layout.  
It also includes a **mood-based recommendation system** that suggests a song, movies/series, and books according to the user’s mood.

This project is built using **HTML5**, **CSS3**, and **JavaScript (ES6+)**.

---

##  Live Website (GitHub Pages)

Paste your link after deployment:

https://khadija646.github.io/entertainment-hub/

---

##  Features

- Displays categorized lists of **movies**, **books**, and **music**  
- Mood-based system recommends:  
  - 1 Song  
  - 2–3 Movies/Series  
  - 2–3 Books  
- Clean card-based UI structure  

---

#  **Project Code**

Below is the full source code used for the project.

---

## **1. index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entertainment Hub</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <header class="site-header">
        <h1>Entertainment Hub</h1>
        <p>Explore movies, music, and books — all in one place.</p>

        <nav class="main-nav">
            <ul>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#music">Music</a></li>
                <li><a href="#mood-recommendations">Mood Recommendations</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="movies" class="content-section">
            <h2>Movies</h2>
            <div class="card-grid">
                <article class="card">
                    <h3>Inception</h3>
                    <p><strong>Cast:</strong> Leonardo DiCaprio</p>
                    <p><strong>Year:</strong> 2010</p>
                </article>

                <article class="card">
                    <h3>Interstellar</h3>
                    <p><strong>Cast:</strong> Matthew McConaughey</p>
                    <p><strong>Year:</strong> 2014</p>
                </article>
            </div>
        </section>

        <section id="books" class="content-section">
            <h2>Books</h2>
            <div class="card-grid">
                <article class="card">
                    <h3>The Hobbit</h3>
                    <p><strong>Author:</strong> J.R.R. Tolkien</p>
                </article>

                <article class="card">
                    <h3>1984</h3>
                    <p><strong>Author:</strong> George Orwell</p>
                </article>
            </div>
        </section>

        <section id="music" class="content-section">
            <h2>Music</h2>
            <div class="card-grid">
                <article class="card">
                    <h3>Blinding Lights</h3>
                    <p><strong>Artist:</strong> The Weeknd</p>
                </article>

                <article class="card">
                    <h3>Someone Like You</h3>
                    <p><strong>Artist:</strong> Adele</p>
                </article>
            </div>
        </section>

        <section id="mood-recommendations" class="content-section">
            <h2>Mood-Based Recommendations</h2>

            <form id="mood-form" class="mood-form">
                <label for="moodSelect">Choose your mood:</label>
                <select id="moodSelect">
                    <option value="">Select mood</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="energetic">Energetic</option>
                    <option value="romantic">Romantic</option>
                    <option value="focus">Focus</option>
                </select>

                <button type="button" id="recommendBtn">Get Recommendations</button>
            </form>

            <div id="recommendationResult"></div>
        </section>
    </main>

    <footer class="site-footer">
        <p>Entertainment Hub — Course Project FAST NUCES</p>
    </footer>
</body>
</html>
