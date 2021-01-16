let buttons = document.getElementsByClassName("button");
    graphic = document.getElementById("graphic");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    toolbox1 = document.getElementById("toolbox1");
    toolbox2 = document.getElementById("toolbox2");
    draggable = ["solar-flares", "time-day", "weather-cools", "weather-heats", "sunlight-reflect", "distance-sun", "earth-rotation", "sunlight-leaves", "sunlight-bounce", "infrared-bounce", "infrared-absorb", "sunlight-absorb", "infrared-reflect", "infrared-leaves","ozone", "greenhouse", "oxygen"];
    questions = ["Q1: What prevents heat from leaving the Earth's surface? And how so?", "Q2: Explain why Earth and Mars have different climates (Earth is warm enough to sustain life, but Mars is not) when they both have ozone layers.", "Q3: Explain what the ozone layer and greenhouse gases do for Earth."];
    page = 1;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", buttonover);
    buttons[i].addEventListener("mouseleave", buttonleave);
}
document.getElementById("previous").addEventListener("click", function() {
    if (page > 1) {
        page--;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("next").style.display = "flex";
        }
        else if (page === 1) {
            this.style.display = "none";
        }
        rearrange(page);
    }
});
document.getElementById("previous").style.display = "none";
document.getElementById("next").addEventListener("click", function() {
    if (page < 3) {
        page++;
        document.getElementById("question").children[0].innerHTML = questions[page - 1];
        if (page === 2) {
            document.getElementById("previous").style.display = "flex";
        }
        else if (page === 3) {
            this.style.display = "none";
        }
        rearrange(page);
    }
});

for (let i = 0; i < draggable.length; i++) {
    console.log("Hello");
    let newitem = document.createElement("div");
    newitem.className = "ui-widget-content";
    newitem.id = draggable[i];
    newitem.innerHTML = draggable[i];
    newitem.style.height = "10vh";
    newitem.style.width = "100%";
    newitem.style.border = "2px solid red";
    newitem.style.cursor = "grab";
    newitem.addEventListener("mousedown", highlight);
    newitem.addEventListener("mouseup", unhighlight);
    $(function() {
        $( "#" + draggable[i] ).draggable();
    });
    toolbox2.appendChild(newitem);
}

function rearrange(input) {
    if (input === 1 || input === 3) {
        graphic.style.height = "100%";
        graphic.style.width = "45%";
        earth.style.maxHeight = "100%";
        earth.style.maxWidth = "100%";
        mars.style.display = "none";
        toolbox1.style.display = "none";
        toolbox2.style.display = "flex";
    }
    else {
        graphic.style.height = "54.5%";
        graphic.style.width = "100%";
        earth.style.maxHeight = "80%";
        earth.style.maxWidth = "45%";
        mars.style.display = "inline-block";
        toolbox1.style.display = "flex";
        toolbox2.style.display = "none";
    }
}

function buttonover() {
    this.style.transform = "scale(1.1)";
}
function buttonleave() {
    this.style.transform = "scale(1)";
}
function highlight() {
    this.style.boxShadow = "3px 3px 10px black";
    this.style.cursor = "grabbing";
}
function unhighlight() {
    this.style.boxShadow = "none";
    this.style.cursor = "grab";
}