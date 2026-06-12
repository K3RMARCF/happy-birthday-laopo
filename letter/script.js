const pos = document.documentElement;

pos.addEventListener(
    "mousemove",
    e => {

        pos.style.setProperty(
            "--x",
            e.clientX + "px"
        );

        pos.style.setProperty(
            "--y",
            e.clientY + "px"
        );

    }
);

// Default flashlight position
pos.style.setProperty(
    "--x",
    "50vw"
);

pos.style.setProperty(
    "--y",
    "50vh"
);