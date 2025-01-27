import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light"); // Added theme state
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    email: "",
    favoriteMusic: "",
    favoriteArtists: "",
    additionalInfo: "",
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle between light and dark mode
  };

  const handleCustomPlaylistRequest = () => {
    alert("Request for custom playlist sent!");
  };

  const handleDetails = () => {
    console.log("Details function triggered");

    // Prompt the user for their details
    const firstName = prompt("Hey there! What's your first name?");
    const email = prompt(
      "Got it! Can I get your email address so I can reach out to you?"
    );
    const favoriteMusic = prompt("What kind of music do you vibe with?");
    const favoriteArtists = prompt(
      "Any favorite artists or bands you'd like to include?"
    );
    const additionalInfo = prompt(
      "Anything else you'd like to share or any special requests for your playlist?"
    );

    if (firstName && email && favoriteMusic && favoriteArtists) {
      setUserDetails({
        firstName,
        email,
        favoriteMusic,
        favoriteArtists,
        additionalInfo,
      });

      alert(
        `Awesome, ${firstName}! I see you are into ${favoriteMusic} and your favorite artists are ${favoriteArtists}. We will get back to you soon with your curated playlist. In the meantime, check out our latest playlists!`
      );
    } else {
      alert(
        "Oops! It seems like something is missing. Please provide all the details so we can create a playlist just for you."
      );
    }
  };

  return (
    <div className={theme}>
      {/* Apply theme class */}
      <div className="container">
        <button className="theme-button" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <h1>Welcome to CurateMe</h1>
        <h2>Let’s Curate Your Sound</h2>
        <div className="first-image-container">
          <a href="https://example.com/link1" target="_blank">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/134/400/original/37eabcfc2b8b09d2381dde9e9e0da49a.jpg?1721431102"
              alt="Playlist Image"
              className="first-image"
            />
          </a>
        </div>
        <div className="grid">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/0jnLjNN3nUydwxSsYcA865?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/3Kv1ERigVg90PjQEJqJDES?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/75NijnFKgtlU2kkvzzz7B6?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1rjESkTs4t04speL56YY66?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Crafting playlists is my way of turning everyday moments into
          memorable soundtracks. It is not just about the music; it is about
          capturing the mood of your day, whether you are powering through work
          or winding down after a long day. Each playlist is a carefully curated
          journey designed to enhance every experience—like having the perfect
          background score for your life's scenes. So, why settle for silence
          when you can have a soundtrack that matches every twist and turn of
          your day? Check out these playlists and let the music do the talking!
        </p>
        <button className="custom-playlist-button" onClick={handleDetails}>
          Create My Custom Playlist
        </button>
        <a
          href="https://open.spotify.com/user/31gc7norgfexet6busx62ffpner4?si=21fa0e1c825c41f4"
          target="_blank"
        >
          <button>Browse Curated Playlists</button>
        </a>
        <footer>
          Coded by
          <a
            href="https://open.spotify.com/user/31gc7norgfexet6busx62ffpner4?si=a9425a0802da4a3e"
            target="_blank"
          >
            Lee
          </a>
          Crafted with passion for music and creativity
        </footer>
      </div>
    </div>
  );
}

export default App;
