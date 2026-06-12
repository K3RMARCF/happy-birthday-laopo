const memories = [

    {
        type: "image",
        title: "First Meeting ❤️",
        src: "../assets/photos/FirstDate.jpg",
        note: "This was the day our story began."
    },

    {
        type: "video",
        title: "Our First Reel 🎥",
        src: "../assets/video/LOL.mp4",
        note: "I still watch this whenever I miss you."
    },

    {
        type: "image",
        title: "First Date 🌸",
        src: "../assets/photos/first_date.jpg",
        note: "I was honestly more nervous than I looked."
    }

];

let currentMemory = 0;

const startBtn =
    document.getElementById("startBtn");

const storyContainer =
    document.getElementById("storyContainer");

const mediaContainer =
    document.getElementById("mediaContainer");


const memoryTitle =
    document.getElementById("memoryTitle");

const note =
    document.getElementById("note");

const noteBtn =
    document.getElementById("noteBtn");

const nextBtn =
    document.getElementById("nextBtn");

const progressText =
    document.getElementById("progressText");

startBtn.addEventListener("click", () => {

    document.querySelector(".hero")
        .style.display = "none";

    storyContainer.classList.remove(
        "hidden"
    );

    loadMemory();

});

noteBtn.addEventListener("click", () => {

    note.classList.toggle("hidden");

});

nextBtn.addEventListener("click", () => {

    currentMemory++;

    if (currentMemory >= memories.length) {

        window.location.href =
            "../planner/index.html";

        return;
    }

    loadMemory();

});

function loadMemory() {

    const memory =
        memories[currentMemory];

    mediaContainer.innerHTML = "";

    if (memory.type === "image") {

        mediaContainer.innerHTML = `
    <img
    src="${memory.src}">
    `;
    }

    else {

        mediaContainer.innerHTML = `
    <video controls>

        <source
        src="${memory.src}"
        type="video/mp4">

    </video>
    `;
    }

    memoryTitle.innerText =
        memory.title;

    note.innerText =
        memory.note;

    note.classList.add("hidden");

    progressText.innerText =
        `Memory ${currentMemory + 1
        } / ${memories.length
        }`;

    document.querySelector(
        ".memory-card"
    ).style.animation = "none";

    void document.querySelector(
        ".memory-card"
    ).offsetWidth;

    document.querySelector(
        ".memory-card"
    ).style.animation =
        "slideIn .7s ease";

    if (
        currentMemory ===
        memories.length - 1
    ) {

        nextBtn.innerText =
            "Plan Our Date ❤️";
    }

    else {

        nextBtn.innerText =
            "Next Memory →";
    }

}