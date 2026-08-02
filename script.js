// Friendship Day Message

const music = document.getElementById("bgmusic");

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

const message = `🎉 Happy Friendship Day! 🎉

To all my amazing friends ❤️

Thank you for filling my life with happiness, laughter, and unforgettable memories.


Wishing you a wonderful Friendship Day! 🤝💙

❤️ From Mahesh ❤️`;

let i = 0;
const speed = 50;

// Typewriter Effect
function typeWriter() {
    if (i < message.length) {
        document.getElementById("message").innerHTML +=
            message.charAt(i) === "\n" ? "<br>" : message.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function () {

    typeWriter();

    // Try to play music automatically
    const music = document.getElementById("bgmusic");

    music.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });

};

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML =
        ["💖","💙","💛","💚","❤️","✨","🎉"][Math.floor(Math.random()*7)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);

}, 350);

// MAHESH Title Color Animation
const colors = [
    "yellow",
    "#pink",
    "#blue",
    "white",
    "#FF4500",
    "#FFFFFF"
];

let c = 0;

setInterval(() => {

    document.getElementById("mahesh").style.color = colors[c];

    c++;

    if (c >= colors.length) c = 0;

}, 500);

const bgMusic = document.getElementById("bgmusic");
const topVideo = document.getElementById("topVideo");

// Video play ayithe background music stop
topVideo.addEventListener("play", function () {
    bgMusic.pause();
});

// Video pause ayithe music malli start
topVideo.addEventListener("pause", function () {
    bgMusic.play();
});

// Video complete ayithe music malli start
topVideo.addEventListener("ended", function () {
    bgMusic.play();
});
