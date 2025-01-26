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
'Dangal': ['Biopic', 'Drama', 'Sports'],
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
'Familiar Wife': ['Drama', 'Romance'],
'Family by Choice': ['Drama', 'Romance'],
'Fargo': ['Crime', 'Drama', 'Thriller'],
'Fidaa': ['Romance', 'Drama'],
'Fight Club': ['Drama', 'Thriller'],
'Fight for My Way': ['Drama', 'Comedy', 'Sports'],
'Finding Nemo': ['Animation', 'Adventure', 'Family'],
'Firefighters': ['Action', 'Drama', 'Thriller'],
'Following': ['Action', 'Crime', 'Mystery'],
'Forrest Gump': ['Drama', 'Romance'],
'From Up on Poppy Hill': ['Animation', 'Drama', 'Family'],
'Frozen': ['Animation', 'Musical', 'Family'],
'Frozen II': ['Animation', 'Musical', 'Adventure'],
'Fukrey': ['Comedy', 'Drama'],
'Full Metal Jacket': ['Drama', 'Gore'],
'Get Out': ['Horror', 'Mystery', 'Thriller'],
'Ghost in the Shell': ['Animation', 'Action', 'Crime'],
'Gladiator': ['Action', 'Adventure', 'Drama'],
'Goblin': ['Fantasy', 'Drama', 'Romance'],
'Goliyon Ki Raasleela Ram-Leela': ['Action', 'Drama', 'Romance'],
'Goodfellas': ['Biopic', 'Crime', 'Drama'],
'Grave of the Fireflies': ['Animation', 'Drama', 'Gore'],
'Gravity': ['Adventure', 'Drama', 'Sci-Fi'],
'Guardians of the Galaxy': ['Sci-Fi', 'Superhero', 'Action'],
'Gully Boy': ['Drama', 'Musical'],
'Haider': ['Drama', 'Thriller'],
'Handsome Guys': ['Action', 'Comedy', 'Crime'],
'Harakiri': ['Action', 'Drama', 'History'],
'Harbin': ['Action', 'Historical', 'Thriller'],
'Hellbound': ['Horror', 'Fantasy', 'Drama'],
'Her': ['Drama', 'Romance', 'Sci-Fi'],
'Hero': ['Action', 'Adventure', 'History'],
'High Society': ['Drama', 'Romance'],
'Hijack 1971': ['Action', 'Historical', 'Thriller'],
'Hospital Playlist': ['Drama', 'Comedy'],

'Hotel Del Luna': ['Fantasy', 'Drama', 'Romance'],
'House of Flying Daggers': ['Action', 'Adventure', 'Drama'],
'Hunger': ['Biopic', 'Drama'],

'I Want to Eat Your Pancreas': ['Animation', 'Drama', 'Romance'],
'I, the Executioner': ['Action', 'Crime', 'Drama'],
'Ikiru': ['Drama'],
'In This Corner of the World': ['Animation', 'Drama', 'Gore'],
'Inception': ['Sci-Fi', 'Thriller', 'Mystery'],
'Infernal Affairs': ['Crime', 'Drama', 'Thriller'],
'Inglourious Basterds': ['Action', 'Drama', 'Gore'],
'Inside Out': ['Animation', 'Comedy', 'Family'],
'Interstellar': ['Sci-Fi', 'Adventure', 'Drama'],
'Ip Man': ['Action', 'Biopic', 'Drama'],
'It': ['Horror', 'Thriller', 'Drama'],
'Itaewon Class': ['Drama', 'Comedy'],
'Jab Tak Hai Jaan': ['Drama', 'Romance'],
'Jab We Met': ['Comedy', 'Drama', 'Romance'],
'Jalsa': ['Action', 'Drama', 'Comedy'],
'Joker': ['Crime', 'Drama', 'Thriller'],
'K2': ['Action', 'Thriller', 'Drama'],
'Kabhi Khushi Kabhie Gham': ['Drama', 'Family', 'Musical'],
'Kabir Singh': ['Drama', 'Romance'],
'Kahaani': ['Crime', 'Drama', 'Thriller'],
'Kahaani 2': ['Crime', 'Drama', 'Thriller'],
'Khaidi No. 150': ['Action', 'Drama'],
'Kingdom': ['Action', 'Horror', 'Historical'],
'Kingdom: Ashin of the North': ['Action', 'Horror', 'Fantasy'],
'Knives Out': ['Mystery', 'Comedy', 'Crime'],
'Kshana Kshanam': ['Action', 'Thriller'],
'Kuch Kuch Hota Hai': ['Comedy', 'Drama', 'Romance'],
'Kung Fu Hustle': ['Action', 'Comedy', 'Fantasy'],
'LTNS': ['Drama', 'Romance'],
'La La Land': ['Musical', 'Romance', 'Drama'],
'Lagaan': ['Drama', 'History', 'Sports'],
'Les Misérables': ['Musical', 'Drama', 'Historical'],
'Let the Right One In': ['Drama', 'Horror', 'Romance'],
'Life Is Beautiful': ['Comedy', 'Drama', 'Gore'],
'Like Flowers in Sand': ['Drama', 'Romance'],
'Lincoln': ['Biopic', 'Drama', 'History'],
'Link: Eat, Love, Kill': ['Drama', 'Fantasy', 'Thriller'],
'Little Witch Academia': ['Animation', 'Adventure', 'Comedy'],
'Logan': ['Superhero', 'Drama', 'Action'],
'Love Alarm': ['Drama', 'Romance', 'Sci-Fi'],

'Love in the Big City': ['Drama', 'Romance'],
'Lovely Runner': ['Drama', 'Romance', 'Sports'],
'Lover': ['Romance', 'Drama'],
'Lovestruck in the City': ['Romance', 'Comedy'],
'Lu Over the Wall': ['Animation', 'Adventure', 'Family'],
'Mad Max: Fury Road': ['Action', 'Adventure', 'Sci-Fi'],
'Magadheera': ['Action', 'Fantasy', 'Drama'],
'Mahanati': ['Biopic', 'Drama'],
'Maharshi': ['Drama', 'Action'],
'Maquia: When the Promised Flower Blooms': ['Animation', 'Adventure', 'Drama'],
'Marry My Husband': ['Drama', 'Romance'],
'Mary Poppins': ['Comedy', 'Family', 'Fantasy'],
'Masaan': ['Drama'],
'Memento': ['Mystery', 'Thriller'],
'Memories of Murder': ['Crime', 'Drama', 'Mystery'],
'Memories of the Alhambra': ['Sci-Fi', 'Thriller', 'Drama'],
'Mirai': ['Animation', 'Adventure', 'Drama'],
'Mission Cross': ['Action', 'Thriller', 'Crime'],
'Moana': ['Animation', 'Adventure', 'Musical'],
'Moneyball': ['Biopic', 'Drama'],
'Moon Lovers: Scarlet Heart Ryeo': ['Drama', 'Romance', 'Historical'],
'Moonlight': ['Drama'],
'Moulin Rouge!': ['Drama', 'Musical', 'Romance'],
'Mouse': ['Crime', 'Drama', 'Thriller'],
'Move to Heaven': ['Drama', 'Family'],
'Mughal-e-Azam': ['Drama', 'History', 'Romance'],
'Mulan': ['Animation', 'Family', 'Musical'],
'Munna Bhai M.B.B.S.': ['Comedy', 'Drama'],
'My ID is Gangnam Beauty': ['Drama', 'Romance', 'Comedy'],
'My Name': ['Action', 'Crime', 'Drama'],
'My Name Is Khan': ['Drama'],
'My Neighbor Totoro': ['Animation', 'Family', 'Fantasy'],
'Naa Peru Surya': ['Action', 'Drama'],
'Nausicaä of the Valley of the Wind': ['Animation', 'Adventure', 'Fantasy'],
'Nenu Local': ['Comedy', 'Romance', 'Drama'],
'No Country for Old Men': ['Crime', 'Drama', 'Thriller'],
'No Gain No Love': ['Drama', 'Romance'],
'Oldboy': ['Action', 'Drama', 'Mystery'],
'Om Shanti Om': ['Action', 'Comedy', 'Drama'],
'Our Beloved Summer': ['Drama', 'Romance', 'Comedy'],
'PK': ['Comedy', 'Drama', 'Sci-Fi'],
'Paan Singh Tomar': ['Biopic', 'Drama', 'Sports'],
'Paprika': ['Animation', 'Drama', 'Fantasy'],
'Parasite': ['Drama', 'Thriller'],
'Paths of Glory': ['Drama', 'Gore'],
'Patton': ['Biopic', 'Drama', 'Gore'],
'Pelli Sandadi': ['Drama', 'Romance'],
'Penguin Highway': ['Animation', 'Adventure', 'Comedy'],
'Perfect Blue': ['Animation', 'Crime', 'Drama'],
'Piku': ['Comedy', 'Drama'],
'Pinocchio': ['Animation', 'Family'],
'Ponyo': ['Animation', 'Adventure', 'Family'],
'Portrait of a Lady on Fire': ['Drama', 'Romance'],
'Princess Mononoke': ['Animation', 'Action', 'Adventure'],
'Prisoners': ['Crime', 'Drama', 'Thriller'],
'Project Silence': ['Action', 'Drama', 'Sci-Fi'],
'Pulp Fiction': ['Crime', 'Drama', 'Thriller'],
'Pyaar Ka Punchnama': ['Comedy', 'Drama'],
'Pyaasa': ['Drama', 'Romance'],
'Queen': ['Comedy', 'Drama'],
'Queen of Divorce': ['Drama', 'Romance'],
'Queen of Tears': ['Drama', 'Comedy'],
'Raanjhanaa': ['Drama', 'Romance'],
'Raat Akeli Hai': ['Crime', 'Drama', 'Mystery'],
'Raise the Red Lantern': ['Drama', 'Romance'],
'Rang De Basanti': ['Drama'],
'Rangasthalam': ['Drama', 'Action', 'Thriller'],
'Rashomon': ['Crime', 'Drama', 'Mystery'],
'Redline': ['Animation', 'Action', 'Sci-Fi'],
'Requiem for a Dream': ['Drama', 'Thriller'],
'Revolver': ['Action', 'Crime', 'Thriller'],
'Ringu': ['Horror', 'Mystery'],
'Robo': ['Action', 'Sci-Fi'],
'Rock On!!': ['Drama', 'Musical'],
'Rocketman': ['Biopic', 'Musical', 'Drama'],
'Roma': ['Drama'],
'Rookie Historian Goo Hae-ryung': ['Historical', 'Drama', 'Romance'],
'Sarrainodu': ['Action', 'Drama'],
'Saving Private Ryan': ['Drama', 'Gore'],
'Seven Samurai': ['Action', 'Adventure', 'Drama'],
'Sholay': ['Action', 'Adventure', 'Drama'],
'Shrek': ['Animation', 'Comedy', 'Fantasy'],
'Shutter Island': ['Mystery', 'Thriller'],
'Signal': ['Crime', 'Drama', 'Mystery'],
'Sing Street': ['Drama', 'Musical', 'Romance'],
'Sisyphus': ['Drama', 'Sci-Fi', 'Thriller'],
'Slumdog Millionaire': ['Drama', 'Romance'],
'Snowpiercer': ['Action', 'Drama', 'Sci-Fi'],
'Spider-Man: Into the Spider-Verse': ['Animation', 'Superhero', 'Action'],
'Spirited Away': ['Animation', 'Fantasy', 'Adventure'],
'Spotlight': ['Biopic', 'Crime', 'Drama'],
'Squid Game': ['Drama', 'Thriller', 'Mystery'],
'Srimanthudu': ['Drama', 'Action'],
'Start-Up': ['Drama', 'Romance', 'Comedy'],
'Steamboy': ['Animation', 'Action', 'Adventure'],
'Steve Jobs': ['Biopic', 'Drama'],
'Stranger': ['Crime', 'Drama', 'Mystery'],
'Stranger Things': ['Sci-Fi', 'Drama', 'Thriller'],
'Sultan': ['Action', 'Drama'],
'Sye': ['Drama', 'Sports'],
'Taare Zameen Par': ['Drama', 'Family'],
'Tamasha': ['Drama', 'Romance'],
'Tanu Weds Manu': ['Comedy', 'Drama', 'Romance'],
'Tanu Weds Manu Returns': ['Comedy', 'Drama'],
'Taxi Driver': ['Action', 'Crime', 'Drama'],
'The Animatrix': ['Animation', 'Action', 'Adventure'],
'The Anthem of the Heart': ['Animation', 'Drama', 'Fantasy'],
'The Avengers': ['Superhero', 'Action', 'Sci-Fi'],
'The Battle of Algiers': ['Drama', 'History', 'Gore'],
'The Big Lebowski': ['Comedy', 'Crime'],
'The Big Short': ['Biopic', 'Comedy', 'Drama'],
'The Blues Brothers': ['Comedy', 'Musical'],
'The Boy and the Beast': ['Animation', 'Action', 'Adventure'],
'The Bridge on the River Kwai': ['Adventure', 'Drama', 'Gore'],
'The Cat Returns': ['Animation', 'Adventure', 'Comedy'],
'The Conjuring': ['Horror', 'Mystery', 'Thriller'],
'The Constant Gardener': ['Drama', 'Thriller'],
'The Dark Knight': ['Action', 'Crime', 'Thriller'],
'The Dark Knight Rises': ['Action', 'Thriller'],
'The Departed': ['Crime', 'Drama', 'Thriller'],
'The English Patient': ['Drama', 'Romance', 'Gore'],
'The Fighter': ['Biopic', 'Drama'],
'The Garden of Words': ['Animation', 'Drama', 'Romance'],
'The Girl with the Dragon Tattoo': ['Crime', 'Drama', 'Mystery'],
'The Glory': ['Drama', 'Thriller'],
'The Godfather': ['Crime', 'Drama'],
'The Godfather Part II': ['Crime', 'Drama'],
'The Grand Budapest Hotel': ['Comedy', 'Drama'],
'The Great Beauty': ['Drama'],
'The Great Gatsby': ['Drama', 'Romance'],
'The Greatest Showman': ['Musical', 'Drama', 'Biopic'],
'The Green Mile': ['Crime', 'Drama'],
'The Handmaiden': ['Drama', 'Mystery', 'Romance'],
'The Heirs': ['Drama', 'Romance'],
'The Host': ['Action', 'Drama', 'Horror'],
'The Hunger Games': ['Adventure', 'Sci-Fi', 'Thriller'],
'The Hurt Locker': ['Drama', 'Gore'],
'The Imitation Game': ['Biopic', 'Drama', 'History'],
'The Incredibles': ['Animation', 'Superhero', 'Action'],
'The Intouchables': ['Biopic', 'Comedy', 'Drama'],
'The Jungle Book': ['Adventure', 'Animation', 'Family'],

'The King: Eternal Monarch': ['Drama', 'Fantasy', 'Romance'],
'The Last Samurai': ['Action', 'Drama', 'Gore'],
'The Lion King': ['Animation', 'Family', 'Adventure'],
'The Lives of Others': ['Drama', 'Thriller'],
'The Lord of the Rings: The Fellowship of the Ring': ['Fantasy', 'Adventure'],

'The Man from Nowhere': ['Action', 'Crime', 'Drama'],
'The Martian': ['Adventure', 'Drama', 'Sci-Fi'],
'The Matrix': ['Sci-Fi', 'Action'],
'The Night Is Short, Walk on Girl': ['Animation', 'Adventure', 'Comedy'],
'The Penthouse': ['Drama', 'Thriller', 'Mystery'],
'The Phantom of the Opera': ['Horror','Romance','Musical'],
'The Pianist': ['Drama', 'Biopic', 'Musical'],
'The Place Promised in Our Early Days': ['Animation', 'Drama', 'Romance'],
'The Plot': ['Crime', 'Drama', 'Mystery'],
'The Prestige': ['Drama', 'Mystery', 'Sci-Fi'],
'The Red Turtle': ['Animation', 'Fantasy'],
'The Revenant': ['Adventure', 'Drama', 'Thriller'],
'The Road': ['Adventure', 'Drama'],
'The Roundup: Punishment': ['Action', 'Crime', 'Thriller'],
'The Secret Life of Walter Mitty': ['Adventure', 'Comedy', 'Drama'],
'The Secret World of Arrietty': ['Animation', 'Adventure', 'Family'],

'The Shape of Water': ['Fantasy', 'Romance', 'Drama'],
'The Shawshank Redemption': ['Drama', 'Crime'],
'The Silence of the Lambs': ['Horror', 'Thriller', 'Crime'],
'The Silent Sea': ['Sci-Fi', 'Thriller', 'Drama'],
'The Sixth Sense': ['Drama', 'Mystery', 'Thriller'],
'The Social Network': ['Biopic', 'Drama'],
'The Tale of The Princess Kaguya': ['Animation', 'Drama', 'Fantasy'],
'The Theory of Everything': ['Biopic', 'Drama', 'Romance'],
'The Thin Red Line': ['Drama', 'Gore'],
'The Truman Show': ['Drama', 'Comedy', 'Sci-Fi'],
'The Trunk': ['Drama', 'Thriller'],
'The Uncanny Counter': ['Action', 'Drama', 'Fantasy'],
'The Wind Rises': ['Animation', 'Biopic', 'Drama'],
'The Witch': ['Horror', 'Drama', 'Mystery'],
'The Wizard of Oz': ['Adventure', 'Drama', 'Family'],
'The Wolf of Wall Street': ['Biopic', 'Comedy', 'Crime'],
'The World of the Married': ['Drama', 'Romance'],
'There Will Be Blood': ['Drama'],
'Tinker Tailor Soldier Spy': ['Drama', 'Thriller'],
'Titanic': ['Romance', 'Drama'],
'To Live': ['Drama', 'Action'],
'Tokyo Story': ['Drama'],
'Toy Story': ['Animation', 'Family', 'Adventure'],
'Train to Busan': ['Action', 'Horror', 'Thriller'],
'True Beauty': ['Drama', 'Romance'],
'Tumbbad': ['Fantasy', 'Horror', 'Mystery'],
'Up': ['Animation', 'Adventure', 'Comedy'],
'Vagabond': ['Action', 'Drama', 'Thriller'],
'Veer-Zaara': ['Drama', 'Romance'],
'Victory': ['Action', 'Drama', 'Sports'],
'Vikram Vedha': ['Action', 'Crime', 'Thriller'],
'Vikramarkudu': ['Action', 'Drama'],
'Vincenzo': ['Crime', 'Drama', 'Comedy'],
'W: Two Worlds': ['Drama', 'Sci-Fi', 'Romance'],
'Wake Up Sid': ['Comedy', 'Drama'],
'Walk the Line': ['Biopic', 'Drama', 'Musical'],
'Weathering with You': ['Animation', 'Drama', 'Fantasy'],

'West Side Story': ['Drama', 'Musical', 'Romance'],
'What’s Wrong with Secretary Kim': ['Drama', 'Romance'],
'When Marnie Was There': ['Animation', 'Drama', 'Family'],
'While You Were Sleeping': ['Drama', 'Romance', 'Fantasy'],
'Whiplash': ['Drama', 'Musical'],
'Wok of Love': ['Drama', 'Comedy'],
'Wolf Children': ['Animation', 'Drama', 'Family'],
'Yojimbo': ['Action', 'Drama', 'Thriller'],
'Your Lie in April': ['Animation', 'Drama', 'Musical'],

'Zindagi Na Milegi Dobara': ['Adventure', 'Comedy', 'Drama'],
'Zootopia': ['Animation', 'Adventure', 'Comedy']




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

    const apiKey = 'cb0cbba1'; // OMDb API Key
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
