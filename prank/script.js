const steps = [

    {
        title: "Before we continue...",
        text: "I have something important to show you.",
        button: "I'm Ready ❤️"
    },

    {
        title: "Are you sure?",
        text: "This is a very serious matter.",
        button: "Yes 😌"
    },

    {
        title: "REALLY sure?",
        text: "Once you continue, there is no turning back.",
        button: "Continue 😳"
    },

    {
        title: "Last warning.",
        text: "You asked for this.",
        button: "Show Me"
    }

];

let currentStep = 0;

const title =
    document.getElementById("title");

const text =
    document.getElementById("text");

const button =
    document.getElementById("nextBtn");

button.addEventListener("click", () => {

    currentStep++;

    if (currentStep < steps.length) {

        title.innerText =
            steps[currentStep].title;

        text.innerText =
            steps[currentStep].text;

        button.innerText =
            steps[currentStep].button;

        return;
    }

    revealPrank();

});

function revealPrank() {

    document.body.innerHTML = `

<img
src="../assets/photos/jumpscare.jpg"
class="prank-image fade">

`;

    setTimeout(() => {

        document.body.innerHTML = `

    <div id="container">

        <h1>
            🤣 GOTCHA 🤣
        </h1>

        <p>
            Congratulations.<br><br>

            You have unlocked:<br><br>

            <strong>
            The final part of this website
            </strong>
        </p>

        <button
        onclick="window.location.href='../letter/index.html'">

            Okay Okay,
            Show Me The Real Letter ❤️

        </button>

    </div>

    `;

    }, 5000);

}