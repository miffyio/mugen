document.addEventListener("DOMContentLoaded", function () {
    let isHidden = window.innerWidth <= 900;
    const musicPlayer = document.querySelector(".music-player-container");
    const togglePlayer = document.querySelector(".toggle-player");
    const trackInfo = document.querySelector(".track-info");
    const trackNav = document.querySelector(".track-nav");

    function updateBackground() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const shouldHide = (screenWidth <= 900 || screenHeight < 700);

        document.body.style.backgroundColor = shouldHide ? "#202020" : "#000000";
        document.body.style.backgroundImage = `url('assets/${shouldHide ? "mugen_word_logo.png" : "SHINY ALEX.GIF"}')`;
        // document.body.style.backgroundImage = `url('assets/SHINY ALEX.GIF')`;
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "50% 50%";
        // document.body.style.backgroundAttachment = "fixed"; // weird mobile shift issue

        // hide player if screen is too small
        if (screenHeight <= 430 || screenWidth <= 430) {
            musicPlayer.style.display = "none";
        } else {
            musicPlayer.style.display = "initial";
        }

        // update player visibility
        isHidden = shouldHide;
        updatePlayerVisibility();
    }

    function updatePlayerVisibility() {
        if (isHidden) {
            musicPlayer.classList.add("hide");
            togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
            trackInfo.style.transitionDelay = "0s";
            trackNav.style.transitionDelay = "0s";
        } else {
            musicPlayer.classList.remove("hide");
            togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';
            trackInfo.style.transitionDelay = "0.4s";
            trackNav.style.transitionDelay = "0.4s";
        }
    }

    // Only allow toggling if screen is large enough
    togglePlayer.addEventListener("click", function () {
        if (window.innerWidth > 900) {
            isHidden = !isHidden;
            updatePlayerVisibility();
        }
        if (window.innerHeight >= 700) {
            isHidden = isHidden;
            updatePlayerVisibility();
        }
    });

    // Run on load and resize
    updateBackground();
    window.addEventListener("resize", updateBackground);
});
