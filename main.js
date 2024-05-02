const trackList = ["./music/cyberbulling.mp3", "./music/miss_you.mp3", "./music/nine_eleven.mp3"];
const source = trackList[Math.floor(Math.random() * trackList.length)];
const player = new Audio(source);
player.play();

/* document.addEventListener("scroll", () => {
    tryPlaySound();
}); */
const acceptCookieButton = document.getElementById("cookie-btn");
const rejectButton = document.getElementById("reject-btn");
const toastContainer = document.getElementById("toast-container");

acceptCookieButton.addEventListener("click", () => {
    toastContainer.remove();
    tryPlaySound();
});
rejectButton.addEventListener("click", () => {
    toastContainer.remove();
});

const tryPlaySound = () => {
    try {
        player.play();
    } catch {}
};
