document.addEventListener("DOMContentLoaded", function () {
    let isHidden = window.innerWidth <= 900;
    const musicPlayer = document.querySelector(".music-player-container");
    const togglePlayer = document.querySelector(".toggle-player");
    const trackInfo = document.querySelector(".track-info");
    const trackNav = document.querySelector(".track-nav");

    function updateBackground() {
        const screenWidth = window.innerWidth;
        const shouldHide = screenWidth <= 900;

        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = `url('assets/web_230116${shouldHide ? ".jpg" : ".png"}')`;
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundAttachment = "fixed";

        // Auto-hide player if screen is too small
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

    togglePlayer.addEventListener("click", function () {
        if (window.innerWidth > 900) { // Only allow toggling if screen is large enough
            isHidden = !isHidden;
            updatePlayerVisibility();
        }
    });

    // Run on load and resize
    updateBackground();
    window.addEventListener("resize", updateBackground);
});
