function details() {
    console.log("Details function triggered");

    let firstName = prompt("Hey there! What's your first name?");
    let email = prompt(
      "Got it! Can I get your email address so I can reach out to you?"
    );
    let favoriteMusic = prompt("What kind of music do you vibe with?");
    let favoriteArtists = prompt(
      "Any favorite artists or bands you'd like to include?"
    );
    let additionalInfo = prompt(
      "Anything else you'd like to share or any special requests for your playlist?"
    );

    if (firstName && email && favoriteMusic && favoriteArtists) {
      alert(
        `Awesome, ${firstName}! I see you are into ${favoriteMusic} and your favorite artists are ${favoriteArtists}. We will get back to you soon with your curated playlist. In the meantime, check out our latest playlists!`
      );
    } else {
      alert(
        "Oops! It seems like something is missing. Please provide all the details so we can create a playlist just for you."
      );
    }
  }

  function switchToLightMode() {
    let body = document.querySelector("body");
    let button = document.querySelector(".theme-button");

    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      button.classList.remove("light-mode");
      button.textContent = "Switch to Light Mode";
    } else {
      body.classList.add("light-mode");
      button.classList.add("light-mode");
      button.textContent = "Switch to Dark Mode";
    }
  }

  let themeButton = document.querySelector(".theme-button");
  themeButton.addEventListener("click", switchToLightMode);

  let customPlaylistButton = document.querySelector(
    ".custom-playlist-button"
  );
  customPlaylistButton.addEventListener("click", function () {
    details();
  });