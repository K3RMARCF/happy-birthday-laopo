const memories = [

    {
        type: "image",
        title: "Date Night🌸",
        src: "../assets/photos/FirstDate.jpg",
        note: "I can still remember we outside of the cinema going to watch movie then we take this photo send to my sister."
    },

    {
        type: "image",
        title: "First 4cut taken together ❤️",
        src: "../assets/photos/FirstPol.jpg",
        note: "Before i go back to sg we go and take, it means so much to me, in bmt i whenever i miss u ill have a look, when i went to the jungle i put inside my left chest pocket to make it feel like ur with me :>."
    },

    {
        type: "image",
        title: "When you came for my POP ❤️",
        src: "../assets/photos/Reunite.jpg",
        note: "I really really missed you so much, still can remember when i saw u, the tears just rushed out and when i hug you it felt like the only place i wanted to be in."
    },

    {
        type: "image",
        title: "RIDE BACK !!!",
        src: "../assets/photos/RideBack.jpg",
        note: "Hahahaha it was so hectic that day trying to rush accross the checkpoint to make it for our flight, end up we didn't and i probably didn't leave a good taste for ur mum but its such good memories."
    },

    {
        type: "video",
        title: "Our First Tiktok 🎥",
        src: "../assets/video/LOL.mp4",
        note: "Hahah so funny, i remember you suddenly ask me do tiktok then show me the dance, then we both so awkward trying outside of camp forest then we screw up so many times hahah "
    },

    {
        type: "image",
        title: "Movie Night",
        src: "../assets/photos/Movie.jpg",
        note: "One of the photos we took, i think its in NU sentral?"
    },

    {
        type: "video",
        title: "Our Theme Park Date ",
        src: "../assets/video/vlog.mp4",
        note: "When we went to berjaya times square and u wanted to try vlogging with me, hahaha so cute here "
    },

    {
        type: "image",
        title: "Ice Cream Date",
        src: "../assets/photos/Socute.jpg",
        note: "We eat this together before CNY bah, where u wear the shirt i buy for u that day for the 4cute, wah see u here like really damn pretty :> "
    },

    {
        type: "image",
        title: "Family PHOTO ",
        src: "../assets/photos/FamilyPhoto.png",
        note: "Take photo with our whole family, u pick the shirt out for me and i pick for u de hehe, also got wou wou hihi, we just missing chou chou :< hehe "
    },

    {
        type: "image",
        title: "Photoshoot Time",
        src: "../assets/photos/photoshoot.jpg",
        note: "U saw my uniform and think very nice, then you arranged a photoshoot timing for us, wah still remember that day the rain so bad but thank you laopo. I had fun doing this photoshoot with you :)"
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