// script.js
// Handles mood-based song, movie/series, and book recommendations.

// Data object: for each mood we store one song, a list of movies/series,
// and a list of books.
const moodRecommendations = {
    happy: {
        song: { title: "Happy", artist: "Pharrell Williams" },
        movies: ["Luca", "Minions", "Zootopia"],
        books: ["The Alchemist", "Ikigai"]
    },
    sad: {
        song: { title: "Someone Like You", artist: "Adele" },
        movies: [
            "The Fault in Our Stars",
            "A Silent Voice"
        ],
        books: [
            "The Kite Runner",
            "A Thousand Splendid Suns"
        ]
    },
    relaxed: {
        song: { title: "Blinding Lights", artist: "The Weeknd" },
        movies: ["Soul", "Your Name (Kimi no Na wa)"],
        books: ["Norwegian Wood", "The Little Prince"]
    },
    energetic: {
        song: { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
        movies: [
            "Spider-Man: Into the Spider-Verse",
            "Avengers: Endgame"
        ],
        books: ["Grit", "Can't Hurt Me"]
    },
    romantic: {
        song: { title: "Perfect", artist: "Ed Sheeran" },
        movies: [
            "Anne with an E",
            "Maxton Hall",
            "La La Land"
        ],
        books: [
            "Me Before You",
            "P.S. I Love You"
        ]
    },
    focus: {
        song: { title: "Study Beats", artist: "Lo-Fi Collective" },
        movies: ["The Social Network"],
        books: ["Atomic Habits", "Deep Work"]
    }
};

// Grab HTML elements once the DOM is ready (script is loaded with "defer").
const moodSelect = document.getElementById("moodSelect");
const recommendBtn = document.getElementById("recommendBtn");
const recommendationResult = document.getElementById("recommendationResult");

// Helper function to capitalize the first letter of the mood for display.
function formatMood(mood) {
    return mood.charAt(0).toUpperCase() + mood.slice(1);
}

// Main function: reads the selected mood and updates the result area.
function handleRecommendationClick() {
    const selectedMood = moodSelect.value;

    // If user did not select any mood, show a simple validation message.
    if (!selectedMood) {
        recommendationResult.textContent = "Please select a mood first.";
        return;
    }

    // Look up the data for the selected mood.
    const data = moodRecommendations[selectedMood];

    // Safety check: if no data exists for the mood.
    if (!data) {
        recommendationResult.textContent = "No recommendations available for this mood yet.";
        return;
    }

    // Build HTML lists for movies and books.
    const moviesListHtml = data.movies
        .map(movieTitle => `<li>${movieTitle}</li>`)
        .join("");

    const booksListHtml = data.books
        .map(bookTitle => `<li>${bookTitle}</li>`)
        .join("");

    // Insert the final recommendation into the page.
    recommendationResult.innerHTML = `
        <h3>Recommendations for ${formatMood(selectedMood)} mood</h3>

        <p><strong>Suggested Song:</strong> ${data.song.title} — ${data.song.artist}</p>

        <h4>Movies / Series</h4>
        <ul>${moviesListHtml}</ul>

        <h4>Books</h4>
        <ul>${booksListHtml}</ul>
    `;
}

// Attach the click handler to the button.
// This makes the "Get Recommendations" button clickable.
if (recommendBtn) {
    recommendBtn.addEventListener("click", handleRecommendationClick);
}