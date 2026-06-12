emailjs.init({
    publicKey: "A8RN-4P4pGv81Krdc"
});

const cards = document.querySelectorAll(".card");
const submitBtn = document.getElementById("submitBtn");

let selected = [];

cards.forEach(card => {

    card.addEventListener("click", () => {

        const activity = card.dataset.activity;

        console.log("Clicked:", activity);

        // deselect
        if (card.classList.contains("selected")) {

            card.classList.remove("selected");

            selected = selected.filter(
                item => item !== activity
            );

            return;
        }

        // if already 2 selected,
        // remove oldest selection
        if (selected.length >= 2) {

            const firstSelected = selected[0];

            const firstCard =
                document.querySelector(
                    `[data-activity="${firstSelected}"]`
                );

            if (firstCard) {
                firstCard.classList.remove("selected");
            }

            selected.shift();
        }

        card.classList.add("selected");

        selected.push(activity);

        console.log(selected);

    });

});

submitBtn.addEventListener("click", () => {

    if (selected.length !== 2) {

        alert(
            "Please select exactly TWO activities ❤️"
        );

        return;
    }

    console.log(
        selected[0],
        selected[1]
    );

    emailjs.send(

        "service_hluzj9j",

        "template_1bkhi0n",

        {
            activity1: selected[0],
            activity2: selected[1],
            selected_time:
                new Date().toLocaleString()
        }

    )

        .then(() => {

            document.body.innerHTML = `

<div class="success-page">

    <div class="success-card">

        <div class="heart">
            ❤️
        </div>

        <h1>
            Mission Accepted ❤️
        </h1>

        <p>
            Your selections have been delivered
            to the birthday planning committee.
        </p>

        <p class="small-text">
            Please await further instructions...
        </p>

        <button
            class="continue-btn"
            onclick="window.location.href='../prank/index.html'"
        >
            Continue →
        </button>

    </div>

</div>

`;

        })

        .catch((error) => {

            console.error(error);

            alert(
                "Email Failed"
            );

        });

});