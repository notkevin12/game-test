let toolbox = document.getElementById("toolbox");
    draggable = ["solar-flares", "time-day", "weather-cools", "weather-heats", "sunlight-reflect", "distance-sun", "earth-rotation", "sunlight-leaves", "sunlight-bounce", "infrared-bounce", "infrared-absorb", "sunlight-absorb", "infrared-reflect", "infrared-leaves","ozone", "greenhouse", "oxygen"];
    questions = ["Q1: What prevents heat from leaving the Earth's surface? And how so?", "Q2: Explain why Earth and Mars have different climates (Earth is warm enough to sustain life, but Mars is not) when they both have ozone layers.", "Q3: Explain what the ozone layer and greenhouse gases do for Earth."];
    page = 1;
    buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", buttonover);
    buttons[i].addEventListener("mouseleave", buttonleave);
}
document.getElementById("previous").addEventListener("click", previous);
document.getElementById("previous").style.display = "none";
document.getElementById("next").addEventListener("click", next);

for (let i = 0; i < draggable.length; i++) {
    console.log("Hello");
    let newitem = document.createElement("div");
    newitem.className = "ui-widget-content";
    newitem.id = draggable[i];
    newitem.innerHTML = draggable[i];
    newitem.style.height = "166px";
    newitem.style.width = "166px";
    newitem.style.border = "2px solid red";
    newitem.style.cursor = "grab";
    newitem.addEventListener("mousedown", highlight);
    newitem.addEventListener("mouseup", unhighlight);
    $(function() {
        $( "#" + draggable[i] ).draggable();
    });
    toolbox.appendChild(newitem);
}

function buttonover() {
    this.style.transform = "scale(1.1)";
}

function buttonleave() {
    this.style.transform = "scale(1)";
}

function next() {
    if (page < 3) {
        page++;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("previous").style.display = "flex";
        }
        else if (page === 3) {
            this.style.display = "none";
        }
    }
}
function previous() {
    if (page > 1) {
        page--;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("next").style.display = "flex";
        }
        else if (page === 1) {
            this.style.display = "none";
        }
    }
}


function highlight() {
    this.style.boxShadow = "3px 3px 10px black";
    this.style.cursor = "grabbing";
}
function unhighlight() {
    this.style.boxShadow = "none";
    this.style.cursor = "grab";
}

class Page {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}