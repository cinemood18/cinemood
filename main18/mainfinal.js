const movies = {
'12 Angry Men': ['Drama'],
'13 Hours: The Secret Soldiers of Benghazi': ['Action', 'Drama', 'Gore'],
'1917': ['Historical', 'Drama', 'Gore'],
'3 Idiots': ['Comedy', 'Drama'],
'5 Centimeters per Second': ['Animation', 'Drama', 'Romance'],
'8 Mile': ['Drama', 'Musical'],
'A Beautiful Mind': ['Biopic', 'Drama'],
'A Clockwork Orange': ['Crime', 'Drama', 'Sci-Fi'],
'A Killer Paradox': ['Crime', 'Drama', 'Suspense'],
'A Korean Odyssey': ['Fantasy', 'Drama', 'Romance'],
'A Model Family': ['Crime', 'Drama'],
'A Piece of Your Mind': ['Drama', 'Romance'],
'A Quiet Place': ['Horror', 'Sci-Fi', 'Drama'],
'A Separation': ['Drama', 'Mystery'],
'A Shop for Killers': ['Action', 'Comedy', 'Crime'],
'A Silent Voice': ['Animation', 'Drama', 'Romance'],
'A Star is Born': ['Drama', 'Musical', 'Romance'],
'Aashiqui 2': ['Drama', 'Musical', 'Romance'],
'Ae Dil Hai Mushkil': ['Drama', 'Musical', 'Romance'],
'Airlift': ['Action', 'Drama', 'Thriller'],
'Akira': ['Animation', 'Action', 'Drama'],
'Ala Vaikunthapurramuloo': ['Action', 'Comedy', 'Drama'],
'Alice in Wonderland': ['Adventure', 'Animation', 'Family'],
'Alien': ['Sci-Fi', 'Horror', 'Thriller'],
'Almost Famous': ['Comedy', 'Drama', 'Musical'],
'Amélie': ['Comedy', 'Romance'],
'Anand': ['Drama'],
'Andhadhun': ['Crime', 'Thriller'],
'Apocalypse Now': ['Drama', 'Gore'],
'Arjun Reddy': ['Drama', 'Romance'],
'Arrival': ['Drama', 'Mystery', 'Sci-Fi'],
'Arthdal Chronicles': ['Action', 'Fantasy', 'Drama'],
'Attarintiki Daredi': ['Comedy', 'Drama'],
'Avengers: Endgame': ['Superhero', 'Action', 'Sci-Fi'],
'Baadshah': ['Action', 'Comedy', 'Thriller'],
'Baahubali 2: The Conclusion': ['Action', 'Adventure', 'Drama', 'Historical'],
'Baahubali: The Beginning': ['Action', 'Adventure', 'Drama', 'Historical'],
'Badland Hunters': ['Action', 'Adventure', 'Crime'],
'Bajirao Mastani': ['Action', 'Drama', 'Romance'],
'Bajrangi Bhaijaan': ['Adventure', 'Drama'],
'Barfi!': ['Comedy', 'Drama', 'Romance'],
'Battle Royale': ['Action', 'Adventure', 'Drama'],
'Beauty and the Beast': ['Fantasy', 'Romance', 'Musical'],
'Belle': ['Animation', 'Adventure', 'Drama'],
'Bhaagamathie': ['Horror', 'Thriller'],
'Bicycle Thieves': ['Drama'],
'Big Fish & Begonia': ['Animation', 'Adventure', 'Drama'],
'Birdman': ['Comedy', 'Drama'],
'Black Hawk Down': ['Action', 'Drama', 'Gore'],
'Black Panther': ['Superhero', 'Action', 'Sci-Fi'],
'Blade Runner 2049': ['Drama', 'Mystery', 'Sci-Fi'],
'Bohemian Rhapsody': ['Biopic', 'Musical', 'Drama'],
'Boys Over Flowers': ['Drama', 'Romance'],
'Braveheart': ['Historical', 'Drama', 'Gore'],
'Casablanca': ['Romance', 'Drama', 'Historical'],
'Castle in the Sky': ['Animation', 'Adventure', 'Family'],
'Chandamama': ['Drama', 'Romance'],
'Cheese in the Trap': ['Drama', 'Romance'],
'Chennai Express': ['Comedy', 'Action', 'Romance'],
'Chhichhore': ['Comedy', 'Drama'],
'Children of Men': ['Action', 'Drama', 'Sci-Fi'],
'Children of the Sea': ['Animation', 'Adventure', 'Drama'],
'Chupke Chupke': ['Comedy', 'Family'],
'Cinderella': ['Animation', 'Family'],
'Cinema Paradiso': ['Drama', 'Romance'],
'Citizen of a Kind': ['Drama', 'Thriller'],
'City of God': ['Crime', 'Drama'],
'Coco': ['Animation', 'Family', 'Fantasy'],
'Colorful': ['Animation', 'Drama', 'Fantasy'],
'Come and See': ['Drama', 'Gore'],
'Crouching Tiger, Hidden Dragon': ['Action', 'Adventure', 'Fantasy'],
'Dallas Buyers Club': ['Biopic', 'Drama'],
'Dangal': ['Biopic', 'Drama', 'Sport'],
'Deadpool': ['Action', 'Comedy', 'Superhero'],
'Descendants of the Sun': ['Drama', 'Romance', 'Action'],
'Devdas': ['Drama', 'Romance'],
'Dhoom 2': ['Action', 'Adventure', 'Thriller'],
'Dil Chahta Hai': ['Comedy', 'Drama'],
'Dil Dhadakne Do': ['Comedy', 'Drama'],
'Dilwale Dulhania Le Jayenge': ['Comedy', 'Drama', 'Romance'],
'District 9': ['Action', 'Drama', 'Sci-Fi'],
'Doctor Slump': ['Drama', 'Comedy', 'Romance'],
'Doom at Your Service': ['Romance', 'Fantasy'],
'Dostana': ['Comedy', 'Drama'],
'Drishyam': ['Crime', 'Drama', 'Thriller'],
'Drive': ['Crime', 'Drama', 'Thriller'],
'Dunkirk': ['Historical', 'Drama', 'Gore'],
'Eega': ['Fantasy', 'Drama', 'Action'],
'Ex Machina': ['Drama', 'Sci-Fi'],
'Exhuma': ['Action', 'Horror', 'Thriller'],
'F2: Fun and Frustration': ['Comedy', 'Drama'],
'Fame': ['Drama', 'Musical'],

};
 
// Track selected genres and displayed movies
const selectedGenres = new Set();
const displayedMovies = new Set(); // To track displayed movies
const cachedPosters = {}; // In-memory cache for posters

// Toggle genre selection and update displayed movies
function toggleGenre(genre) {
    const buttons = document.querySelectorAll(".button-container button");
    buttons.forEach(btn => {
        if (btn.textContent === genre) {
            btn.classList.toggle("selected");
        }
    });

    if (selectedGenres.has(genre)) {
        selectedGenres.delete(genre);
    } else {
        selectedGenres.add(genre);
    }

    displayedMovies.clear(); // Clear displayed movies when genres change
    debounce(displayRecommendations, 300)(); // Debounced recommendations
}

// Debounce function to reduce redundant executions
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

// Fetch the movie poster, using cache first
async function fetchMoviePoster(movieTitle) {
    if (cachedPosters[movieTitle]) {
        return cachedPosters[movieTitle]; // Return from in-memory cache
    }

    const cachedPoster = localStorage.getItem(movieTitle);
    if (cachedPoster) {
        cachedPosters[movieTitle] = cachedPoster; // Update in-memory cache
        return cachedPoster;
    }

    const apiKey = '417f94d1'; // OMDb API Key
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True" && data.Poster !== "N/A") {
            const posterUrl = data.Poster;
            localStorage.setItem(movieTitle, posterUrl);
            cachedPosters[movieTitle] = posterUrl; // Update in-memory cache
            return posterUrl;
        } else {
            return 'https://via.placeholder.com/200x250?text=No+Poster';
        }
    } catch (error) {
        console.error("Error fetching poster:", error);
        return 'https://via.placeholder.com/200x250?text=Error';
    }
}

// Display recommended movies based on selected genres
async function displayRecommendations() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; // Clear the container before adding new cards

    const fragment = document.createDocumentFragment(); // Use a fragment to minimize DOM writes

    for (const [title, genres] of Object.entries(movies)) {
        const isMatch = Array.from(selectedGenres).every(genre => genres.includes(genre));

        if (isMatch && !displayedMovies.has(title)) { // Avoid re-displaying movies
            const card = document.createElement("div");
            card.className = "card";

            const cardImg = document.createElement("img");
            const posterUrl = await fetchMoviePoster(title); // Cached or fetched
            cardImg.src = posterUrl;

            const cardContent = document.createElement("div");
            cardContent.className = "card-content";

            const cardTitle = document.createElement("div");
            cardTitle.className = "card-title";
            cardTitle.textContent = title;

            const cardGenres = document.createElement("div");
            cardGenres.className = "card-genres";
            cardGenres.textContent = genres.join(", ");

            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardGenres);
            card.appendChild(cardImg);
            card.appendChild(cardContent);

            fragment.appendChild(card);
            displayedMovies.add(title); // Mark movie as displayed
        }
    }

    cardContainer.appendChild(fragment); // Append all cards at once
}

// Preload posters for all movies
async function preloadPosters() {
    const promises = Object.keys(movies).map(title => fetchMoviePoster(title));
    await Promise.all(promises); // Load all posters in parallel
}

// Call preload on page load
preloadPosters();
