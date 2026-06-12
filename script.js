function openGift() {

    window.location.href = "story/index.html";
}

const catContainer =
    document.getElementById("cat-container");

const TOTAL_CATS = 12;

for (let i = 0; i < TOTAL_CATS; i++) {

    createCat();
}

function createCat() {

    const cat =
        document.createElement("img");

    cat.src =
        "assets/applecat.gif";

    cat.classList.add("floating-cat");

    cat.style.left =
        Math.random() * 100 + "vw";

    cat.style.bottom =
        (-100 - Math.random() * 500) + "px";

    cat.style.width =
        (60 + Math.random() * 60) + "px";

    cat.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    cat.style.animationDelay =
        Math.random() * 5 + "s";

    catContainer.appendChild(cat);
}