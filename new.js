const colors = [
    "lightblue",
    "lightpink",
    "lightgreen",
    "lavender",
    "peachpuff",
    "lightyellow",
    "lightsalmon",
    "lightcyan",
    "plum",
    "khaki",
    "mistyrose",
    "palegreen",
    "skyblue",
    "wheat",
    "thistle",
    "aquamarine",
    "lightcoral",
    "powderblue",
    "moccasin",
    "palevioletred"
];

let colorIndex = 0;

function changeMessage() {
    document.getElementById("message").textContent =
        "You just used JavaScript! 🚀";

    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex === colors.length) {
        colorIndex = 0;
    }

}