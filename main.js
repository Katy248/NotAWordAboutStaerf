const trackList = ["./music/cyberbulling.mp3", "./music/miss_you.mp3", "./music/nine_eleven.mp3"];
const source = trackList[Math.floor(Math.random() * trackList.length)];
const player = new Audio(source);

const acceptCookieButton = document.getElementById("cookie-btn");
const rejectButton = document.getElementById("reject-btn");
const cookieContainer = document.getElementById("cookie-container");

acceptCookieButton.addEventListener("click", () => {
    cookieContainer.remove();
    tryPlaySound();
});
rejectButton.addEventListener("click", () => {
    cookieContainer.remove();
    tryStopSound();
});

const tryPlaySound = () => {
    try {
        player.play();
    } catch {}
};
const tryStopSound = () => {
    try {
        player.pause();
    } catch {}
};
